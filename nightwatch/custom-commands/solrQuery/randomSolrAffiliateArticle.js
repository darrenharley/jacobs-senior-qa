exports.random_solr_affiliate_article_entry = function(solrClientArticles,publishDateRegex, callback) {
	var getSolrArticlesDocCountQuery = solrClientArticles.createQuery()
	.q({PublishedDate:publishDateRegex,PrimarySection:"equipment", SecondarySection:"best"})
	.start(0)
	.rows(1)
	solrClientArticles.search(getSolrArticlesDocCountQuery,function(err,obj) {
		if(err) {
			callback(err,null);
			callback(err,obj.response.docs.length > 0);
		}
		else {
			var randomSolrEntryRowNumber = Math.floor(Math.random()* obj.response.numFound)
			var getSolrArticlesDocCountQuery = solrClientArticles.createQuery()
			.q({PublishedDate:publishDateRegex,PrimarySection:"equipment", SecondarySection:"best"})
			.start(randomSolrEntryRowNumber)
			.rows(1)
			solrClientArticles.search(getSolrArticlesDocCountQuery,function(err,obj) {
				callback(null, obj.response.docs[0]);
			});
		}
	})
};