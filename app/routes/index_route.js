CC.IndexRoute = Em.Route.extend({
    beforeModel: function() {
        this.transitionTo('schedule');
    }
});