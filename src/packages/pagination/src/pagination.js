import {computed, ref, watchEffect} from "vue";
import prev from './prev.vue'
import pager from './pagList.vue'
import next from './next.vue'

export const usePagination = (props, emit) => {
    const layoutComponent = {prev, pager, next};
    const currentPage = ref(Number(props.pageNum)); //当前激活的页码
    const currentPageSize = ref(Number(props.pageSize)); //每页显示的条数
    const total = ref(0); //总页数


    const setCurrentPage = (type, pageNum = 1, isEmit = true) => {
        let num = currentPage.value;
        type === "prev" ? num-- : type === "next" ? num++ : (num = Number(pageNum));

        // 限制页码的边界值，最小为 1，最大不超过总页数
        currentPage.value = num < 1 ? 1 : num > total.value ? total.value : num;
        if (currentPage.value !== props.pageNum && isEmit) {
            emit("page-change", currentPage.value);
        }
    };
    watchEffect(() => {
        // 根据传入的 total 计算总页数
        total.value = Math.ceil(props.total / currentPageSize.value);
        // 相应的，在每页条数和总页数有变化时，需要重新设定当前激活页，以防止溢出边界值的情况
        if (total.value) {
            setCurrentPage("page", currentPage.value, false);
        }
    });
    // 上一页
    const prevComponent = computed(() => {
        return {
            bind: {
                text: props.prevText,
                disabled: props.disabled || currentPage.value === 1,
            },
            event: "click",
            eventName: setCurrentPage,
        };
    });

    // 页码列表
    const pagerComponent = computed(() => {
        return {
            bind: {
                pages: total.value,
                pagerCount: Number(props.pagerCount),
                currentPage: currentPage.value,
            },
            event: "click",
            eventName: setCurrentPage,
        };
    });

    // 下一页
    const nextComponent = computed(() => {
        return {
            bind: {
                text: props.nextText,
                disabled: props.disabled || currentPage.value === total.value,
            },
            event: "click",
            eventName: setCurrentPage,
        };
    });

    const componentsList = computed(() => {
        const {layout, simple} = props;
        const layoutList = simple ? ["prev", "simple", "next"] : layout.split(","); // 可自定义的分页布局配置
        const components = {
            prev: prevComponent.value,
            pager: pagerComponent.value,
            next: nextComponent.value
        }
        const resComponents = [];
        layoutList.map((name) => {
            resComponents.push({name, component: layoutComponent[name], ...components[name]})
        })
        return resComponents;
    })
    return {
        componentsList
    }
}
