CC.TracksRoute = Em.Route.extend({
    model: function() {
        return this.store.all('track');
    }
});