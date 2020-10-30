export default {
    mounted(el) {
        console.log(el);
        const _selectInput = el.querySelector('.l-select-input'),
            _selectList = el.querySelector('.l-select-list');
        _selectInput.addEventListener('focus', () => {
            //当可模糊搜索的时候
            // _selectInput.removeAttribute('placeholder')
            setTimeout(() => {
                _selectList.style.display = 'block';
            }, 200);
        },false)
        // _selectInput.addEventListener('blur',()=>{
        //     setTimeout(() => {
        //         _selectList.style.display = 'none';
        //     }, 200);
        // })

    }
}
