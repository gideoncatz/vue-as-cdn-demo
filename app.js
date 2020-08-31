Vue.component('player', {
    template: 
    `
    <div class="player-container">
        <div class="player-name">{{ name }}</div>
        <div class="player-score ">{{ score }}</div>
    </div>
    `,
    props: ['name'],
    data() {
        return {
            score: 0
        };
    }
});

new Vue({
    el: '#my-app-root',
    data: {
        stage: 'Semi-final'
    }
});
