CC.Router.map(function() {
    this.resource('sessions');
    this.resource('session', { path: 'session/:session_id' });
    this.resource('speakers');
    this.resource('tracks');
});