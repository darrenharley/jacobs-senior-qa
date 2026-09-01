exports.random_solr_equipment_review_entry = function(solrClientEquipment, publishDateRegex, callback) {
	var getSolrEquipmentReviewsDocCountQuery = solrClientEquipment.createQuery()
	.q({PublishedDate:publishDateRegex})
	.start(0)
	.rows(1)
	solrClientEquipment.search(getSolrEquipmentReviewsDocCountQuery,function(err,obj) {
		if(err) {
			callback(err,null);
			callback(err,obj.response.docs.length > 0);
		}
		else {
			var randomSolrEntryRowNumber = Math.floor(Math.random()* obj.response.numFound)
			var getSolrEquipmentReviewsDocCountQuery = solrClientEquipment.createQuery()
			.q({PublishedDate:publishDateRegex})
			.start(randomSolrEntryRowNumber)
			.rows(1)
			solrClientEquipment.search(getSolrEquipmentReviewsDocCountQuery,function(err,obj) {
				callback(null, obj.response.docs[0]);
			});
		}
	})
};