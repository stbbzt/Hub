
var lib = {
    content: require('/lib/xp/content'),
    thymeleaf: require('/lib/xp/thymeleaf'),
    portal: require('/lib/xp/portal')
};

exports.get = function(req){

    var tagParam = req.params.tag ? req.params.tag : "";
    var type = req.params.type ? req.params.type : ""; //'article' ;

    var query;

    if(req.params.type != ""){
        query = "data.type = '" + type + "'";
    }

    if(req.params.tag != ""){

        if(query != "") query += " AND ";
        query += "fulltext('data.bags.mainTag, data.bags.tags, data.bags.topTags', '" + tagParam + "', 'AND')";
    }

    var content = lib.content.query({
        query: query, //"data.type = '" + type +"' AND fulltext('data.bags.mainTag, data.bags.tags','" + tagParam + "', 'AND') ",
        sort: 'modifiedTime DESC',
        contentTypes: [app.name + ":content"]
    });


    return {
        body: lib.thymeleaf.render(resolve('content-list.html'), content)
    }

}
