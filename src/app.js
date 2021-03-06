import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false
    },
    methods:{
        inputChange(e){
            console.log(e);
        },
        input(e){
            console.log('input');
        },
        inputFocus(e){
            console.log('focus');
        },
        inputBlur(e){
            console.log('blur');
        }
    }
})