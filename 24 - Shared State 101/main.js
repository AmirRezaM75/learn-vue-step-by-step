let store = {
    user : {
        name: 'John'
    }
}

new Vue({
    el: '#app',
    data: {
        title: 'app',
        shared: store
    }
});

new Vue({
    el: '#root',
    data: {
        title: 'root',
        shared: store
    }
});
