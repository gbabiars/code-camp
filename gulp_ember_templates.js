var compiler = require('ember-template-compiler'),
    es = require('event-stream'),
    path = require('path'),
    _s = require('underscore.string');

var processFilename = function(name) {
    var prefix = _s.include(name, 'components') ? 'components/' : '';
    return prefix + path.basename(name, path.extname(name));
};

module.exports = function() {

    var compileTemplate = function(file, callback) {
        var input, compiled;
        var name = processFilename(file.path);

        try {
            input = compiler.precompile(file.contents.toString(), false);
            compiled = "Ember.TEMPLATES['" + name + "'] = Ember.Handlebars.template(" + input + ");";
        } catch(err) {
            return callback(err, file);
        }

        file.path = path.join(path.dirname(file.path), name + '.js');
        file.contents = new Buffer(compiled);

        callback(null, file);
    };

    return es.map(compileTemplate);
};