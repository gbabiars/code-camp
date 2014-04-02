(function() {

    var attr = DS.attr,
        belongsTo = DS.belongsTo;

    CC.Session = DS.Model.extend({
        title: attr(),
        description: attr(),
        time: attr(),
        room: attr(),
        status: attr(),

        track: belongsTo('track'),
        speaker: belongsTo('user')
    });

}());
