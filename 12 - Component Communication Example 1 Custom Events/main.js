Vue.component('coupon', {
    template: "<input type='text' placeholder='Enter your code here' @blur='couponApplied'>",
    methods: {
       couponApplied() {
           this.$emit('applied');
       }
    }
});

new Vue({
    el: '#root',
    methods: {
        couponApplied() {
            alert('Root: Coupon applied');
        }
    }
});
