CC.TrackSessionItemController = Em.ObjectController.extend({
    isVisible: function() {
        var status = this.get('model.status');
        return this.get('parentController.display' + Em.String.capitalize(status));
    }.property('model.status', 'parentController.{displaySuggested,displayPending,displayApproved}')
});