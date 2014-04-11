CC.SpeakerRoute = Em.Route.extend({
    model: function(params) {
        return this.store.find('user', params.speaker_id);
    }
});