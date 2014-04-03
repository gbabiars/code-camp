CC.ScheduleController = Em.ArrayController.extend({
    groupedSessions: function() {
        var result = Em.A([]),
            sessions = this.get('model');

        sessions
            .filter(function(s) {
                return s.get('startTime') && s.get('endTime');
            })
            .forEach(function(session) {

                var existingGroup = result.find(function(g) {
                    return g.startTime.getTime() === session.get('startTime').getTime() &&
                        g.endTime.getTime() === session.get('endTime').getTime();
                });

                if(existingGroup) {
                    existingGroup.sessions.push(session);
                } else {
                    result.push({
                        startTime: session.get('startTime'),
                        endTime: session.get('endTime'),
                        sessions: [session]
                    });
                }

            });

        return result.sortBy('startTime');

    }.property('model')
});