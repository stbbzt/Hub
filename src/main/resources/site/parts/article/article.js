var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

// Handle the GET request
exports.get = function(req) {

    // Get the country content as a JSON object
    var content = portal.getContent();

    // Prepare the model object with the needed data from the content
    var model = {
        htmlarea_text: content.htmlarea_text
    };

    // Specify the view file to use
    var view = resolve('article.html');

    // Return the merged view and model in the response object
    return {
        body: thymeleaf.render(view, model),
        pageContributions: {
            headEnd: '<link rel="stylesheet" href="' + portal.assetUrl({path: "css/style.css"}) + '" type="text/css" media="all"/>'
         }
    }
};