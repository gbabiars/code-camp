CC.ScheduleRoute = Em.Route.extend({
    model: function() {
        return this.store.all('session');
    }
});