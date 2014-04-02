CC.ScheduleController = Em.ArrayController.extend({
    groupedSessions: function() {
        var result = Em.A([]),
            sessions = this.get('model');

        sessions.forEach(function(session) {
            var time = session.get('time');

            if(result.anyBy('time', time)) {
                result.findBy('time', time).sessions.push(session);
            } else {
                result.addObject({
                    time: time,
                    sessions: [session]
                });
            }
        });

        console.log(result);

        return result;

    }.property('model')
});