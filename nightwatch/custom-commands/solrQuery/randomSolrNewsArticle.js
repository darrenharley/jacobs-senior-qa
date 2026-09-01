exports.random_solr_news_article_entry = function(solrClientArticles, callback) {
	var getSolrNewsArticlesDocCountQuery = solrClientArticles.createQuery()
	.q('PrimarySection:news-and-events')
	.start(0)
	.rows(1)
	solrClientArticles.search(getSolrNewsArticlesDocCountQuery,function(err,obj) {
		if(err) {
			callback(err,null);
			callback(err,obj.response.docs.length > 0);
		}
		else {
			var randomSolrEntryRowNumber = Math.floor(Math.random()* obj.response.numFound)
			var getSolrNewsArticlesDocCountQuery = solrClientArticles.createQuery()
			.q('*:*')
			.start(randomSolrEntryRowNumber)
			.rows(1)
			solrClientArticles.search(getSolrNewsArticlesDocCountQuery,function(err,obj) {
				callback(null, obj.response.docs[0]);
			});
		}
	})
};