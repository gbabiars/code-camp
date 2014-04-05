CC.SpeakersRoute = Em.Route.extend({
    model: function() {
        return this.store.all('user');
    }
});