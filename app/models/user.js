(function() {

    var attr = DS.attr;

    CC.User = DS.Model.extend({
        name: attr(),
        description: attr(),
        cell: attr(),
        twitter: attr(),
        facebook: attr(),
        speakerRate: attr(),
        slideShare: attr(),
        blog: attr()
    });

}());