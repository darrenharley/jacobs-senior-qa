exports.random_solr_course_entry = function(solrClientCourses, callback) {
	var getSolrCoursesDocCountQuery = solrClientCourses.createQuery()
	.q('*.*')
	.start(0)
	.rows(1)
	solrClientCourses.search(getSolrCoursesDocCountQuery,function(err,obj) {
		if(err) {
			callback(err,null);
			callback(err,obj.response.docs.length > 0);
		}
		else {
			var randomSolrEntryRowNumber = Math.floor(Math.random()* obj.response.numFound)
			var getSolrCoursesDocCountQuery = solrClientCourses.createQuery()
			.q('*.*')
			.start(randomSolrEntryRowNumber)
			.rows(1)
			solrClientCourses.search(getSolrCoursesDocCountQuery,function(err,obj) {
				callback(null, obj.response.docs[0]);
			});
		}
	})
};