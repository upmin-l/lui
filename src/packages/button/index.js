import lButton from './src/button.vue'

lButton.install = function (Vue) {
    Vue.component('l-' + lButton.name, lButton)
};
export  default  lButton
