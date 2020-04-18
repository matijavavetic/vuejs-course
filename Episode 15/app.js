Vue.component('greeting', {
    template: '<p>Hey there, I am a re-usable component</p>',
    data: function() {
        return {
            
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