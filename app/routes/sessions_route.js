CC.SessionsRoute = Em.Route.extend({
    model: function() {
        return this.store.all('session');
    }
});