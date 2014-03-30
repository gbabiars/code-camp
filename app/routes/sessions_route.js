CC.SessionsRoute = Em.Route.extend({
    model: function() {
        return this.store.find('session');
    }
});