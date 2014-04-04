Em.Handlebars.helper('friendly-time', function(time) {
    return moment(time).format('LT');
});