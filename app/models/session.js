(function() {

    var attr = DS.attr,
        belongsTo = DS.belongsTo;

    CC.Session = DS.Model.extend({
        title: attr(),
        description: attr(),
        speaker: belongsTo('user'),
        track: attr(),
        time: attr('date'),
        room: attr()
    });

}());
