CC.Router.map(function() {
    this.resource('session', { path: 'sessions/:session_id' });
    this.resource('speakers');
    this.resource('speaker', { path: 'speakers/:speaker_id' });
    this.resource('tracks', { path: 'sessions/by-track' });
    this.resource('schedule');
});