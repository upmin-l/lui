import lPagination from './src/pagination.vue'

lPagination.install = function (Vue){
    Vue.component(lPagination.name, lPagination)
}

export default  lPagination
