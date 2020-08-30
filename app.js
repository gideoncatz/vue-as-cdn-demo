Vue.component('player', {
    template: 
    `
    <div>
        <div>Player: {{ name }}</div>
    </div>
    `,
    props: ['name']
});

new Vue({
    el: '#my-app-root',
    data: {
        stage: 'Semi-final'
    }
});
