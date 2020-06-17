Vue.component('modal', {
    template: `
	<div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <p><slot></slot></p>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
	`
});

/*
* @click="showModal = false" is not gonna work because of the scope
* When you click on close button, I want to notify our root instance that status of modal has changed
*/


new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});
