(function() {

    var attr = DS.attr,
        hasMany = DS.hasMany;

    CC.User = DS.Model.extend({
        name: attr(),
        biography: attr(),
        twitter: attr(),
        facebook: attr(),
        speakerRate: attr(),
        slideShare: attr(),
        blog: attr(),

        sessions: hasMany('session')
    });

}());