Vue.component('coupon', {
    props: ['code'],
    template: `
    <div class="field">
        <div class="control">
            <input class="input is-danger" type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
        </div>
    </div>
    `,
    methods: {
        updateCode(code) {
            if (code === 'HOLIDAY') this.$refs.input.value = code = '';

            this.$emit('input', code);
        }
    }
})

new Vue({
    el: '#app',
    data: {
        coupon: 'FREEBIE'
    }
});
