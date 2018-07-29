const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('接受value.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: '123'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        console.log(inputElement);
        expect(inputElement.value).to.equal('123')
        vm.$destroy()
    })
})