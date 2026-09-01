var frameId;
exports.command = function() {
	this.pause(5000);
  	this.elements('css selector', 'iframe[id*="sp_message_iframe"]', function (cmpPresent) {
		if (cmpPresent.value.length === 0) {
			console.log('No CMP present');
		} else {
			console.log('CMP present...')
			this.getAttribute('iframe[id*="sp_message_iframe"]', 'id', function (result) {
				frameId = result.value;
				this.frame(frameId);
				this.waitForElementPresent('button[title="Agree"]', 5000)
				this.element('button[title="Agree"]').click();
				this.frameParent();
			})
		}
	})
	return this;
};
