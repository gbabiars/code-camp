CC.TrackSquareComponent = Em.Component.extend({
    classNames: 'track-square',
    classNameBindings: ['trackClass'],

    trackClass: function() {
        var track = this.get('track');
        console.log(track);
        if(!track) return;
        return track.toLowerCase().replace('.', '').split(' ')[0].split('/')[0];
    }.property('track'),

    track: ''
});