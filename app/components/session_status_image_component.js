CC.SessionStatusImageComponent = Em.Component.extend({
    tagName: 'img',

    attributeBindings: ['src'],
    src: function() {
        var status = this.get('status');
        if(!status) return;
        return Em.String.fmt('images/%@.png', [status]);
    }.property('status'),

    status: ''
});