Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }} . <button v-on:click="changeName">Change name</button></p>',
    data: function() {
        return {
            name: 'Yoshi'
        }
    },

    methods: {
        changeName: function() {
            this.name = 'Mario';
        }
    }
});

new Vue({
    el: '#vue-app-one',

    data: {
        title: 'Vue App One'
    },

    methods: {

    },

    computed: {

    }
});

new Vue({
    el: '#vue-app-two',

    data: {
        title: 'Vue App Two'
    },

    methods: {

    },

    computed: {

    }
});