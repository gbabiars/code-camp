(function() {

    var attr = DS.attr,
        hasMany = DS.hasMany,
        belongsTo = DS.belongsTo;

    CC.Session = DS.Model.extend({
        title: attr(),
        description: attr(),
        startTime: attr('date'),
        endTime: attr('date'),
        room: attr(),
        status: attr(),

        track: belongsTo('track'),
        presenters: hasMany('user')
    });

}());
