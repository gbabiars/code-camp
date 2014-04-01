(function() {

    var attr = DS.attr,
        hasMany = DS.hasMany;

    CC.Track = DS.Model.extend({
        name: attr(),
        description: attr(),
        sessions: hasMany('session')
    });

}());
