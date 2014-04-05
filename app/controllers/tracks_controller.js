CC.TracksController = Em.ArrayController.extend({
    sortProperties: ['name'],
    sortAscending: true,

    displaySuggested: true,
    displayPending: true,
    displayApproved: true
});