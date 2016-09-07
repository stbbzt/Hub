var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function
var portal = require('/lib/xp/portal');


// Handle the GET request
exports.get = function(req) {

    // Specify the view file to use
    var view = resolve('frontpage.html');
    var siteConfig = portal.getSiteConfig();
    var content = portal.getContent();
    
    var mainRegion = content.page.regions["main"];

    var model = {
        title: siteConfig.title,
        mainRegion: mainRegion
    }

    // Render HTML from the view file
    var body = thymeleaf.render(view, model);

    // Return the response object
    return {
        body: body
    }
};
