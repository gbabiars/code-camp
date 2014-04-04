CC.Router.map(function() {
    this.resource('sessions');
    this.resource('session', { path: 'session/:session_id' });
    this.resource('speakers');
    this.resource('speaker', { path: 'speakers/:speaker_id' });
    this.resource('tracks');
    this.resource('schedule');
});