
var lib = {
    content: require('/lib/xp/content'),
    thymeleaf: require('/lib/xp/thymeleaf')
};

exports.get = function(req){

    var q = req.params.q ? req.params.q : "";

    var query = "ngram('data.title^5, data.preface, data.body', '" + q + "', 'AND')";


    var content = lib.content.query({
        query: query, //"data.type = '" + type +"' AND fulltext('data.bags.mainTag, data.bags.tags','" + tagParam + "', 'AND') ",
        //sort: 'modifiedTime DESC',
        contentTypes: [app.name + ":content"]
    });

    var model = {
        firstList: content[0],
        mainList: content
    }

    return {
        body: lib.thymeleaf.render(resolve('searchresults.html'), content)
    }

}
