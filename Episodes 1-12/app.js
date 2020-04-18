new Vue({
    el: '#vue-app',

    data: {
        name: 'Matija',
        job: 'Dev',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The ninja</a>',
        age: 22,
        x: 0,
        y: 0,
        nameLog: '',
        ageLog: '',
        cAge: 20,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        charName: 'jack',
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { nName: 'Ryu', nAge: 25 },
            { nName: 'Yoshi', nAge: 35},
            { nName: 'Ken', nAge: 55 }
        ]
    },

    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me');
        },
        logName: function() {
            console.log('You entered your name');
        },
        logAge: function() {
            console.log('You entered your age');
        },
       /* addToA: function() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age;
        } */
    },

    computed: {
        addToA: function() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});