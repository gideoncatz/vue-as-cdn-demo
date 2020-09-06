Vue.component('player', {
    template: 
    `
    <div class="player-container">
        <div class="player-name">{{ name }}</div>
        <div class="player-scores-btn-wrap" @click="incrementScore()">
            <div class="player-scores-btn">Scores!</div>
        </div>
        <div class="player-current-score">{{ score }}</div>
    </div>
    `,
    props: ['name'],
    data() {
        return {
            score: 0
        };
    },
    methods: {
        incrementScore() {
            this.score++;
            this.$emit('scores', this.score);
        }
    }
});

new Vue({
    el: '#my-app-root',
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
