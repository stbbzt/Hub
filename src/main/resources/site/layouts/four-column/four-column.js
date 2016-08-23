var stk = require('stk/stk');
var portal = require('/lib/xp/portal');

exports.get = handleGet;

function handleGet(req) {

    var component = portal.getComponent();

    var params = {
        oneRegion: component.regions["one"],
        twoRegion: component.regions["two"],
        threeRegion: component.regions["three"],
        fourRegion: component.regions["four"]
    };

    var view = resolve('four-column.html');
    return stk.view.render(view, params);

}