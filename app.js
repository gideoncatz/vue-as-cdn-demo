Vue.component('player', {
    template: 
    `
    <div>
        <div>Hi, I'm a reusable player component!</div>
    </div>
    `
});

new Vue({
    el: '#my-app-root',
    data: {
        name: 'Luke Skywalker'
    }
});
