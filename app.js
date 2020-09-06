import Player from './components/player.js';

new Vue({
    el: '#my-app-root',
    components: { Player },
    data: {
        stage: 'Semi-final'
    },
    methods: {
        handleScoresEvent(score) {
            if (score > 10) {
                alert('The match is over!');
            }
        }
    }
});
