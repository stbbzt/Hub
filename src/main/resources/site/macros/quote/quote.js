

var lib = {
    portal: require('/lib/xp/portal')
};

exports.macro = function (context) {
    var quoteText = context.params.quoteText;
    var source = context.params.source;


    var body = '<span class="quote">' + quoteText + '</span><br/><span class="quoteSource">' + source + '</span>';

    return {
        body: body,
        pageContributions: {
            headEnd: [
                '<link href="' + portal.assetUrl({path: 'css/quote.css'}) + '"/>'
            ]
        }
    }
};
