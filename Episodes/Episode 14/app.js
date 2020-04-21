Vue.component('greeting', {
    template: '<p>Hey there, I am a re-usable component</p>'
});

var one = new Vue({
    el: '#vue-app-one',

    data: {
        title: 'Vue App One'
    },

    methods: {

    },

    computed: {
        greet: function() {
            return 'Hello from App One'
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',

    data: {
        title: 'Vue App Two'
    },

    methods: {
        changeTitle: function() {
            one.title = "Changed title of App One";
        }
    },

    computed: {
        greet: function() {
            return 'Hello from App Two'
        }
    }
});

// two.title = "Changed from outside.";