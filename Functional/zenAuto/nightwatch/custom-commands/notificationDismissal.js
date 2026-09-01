exports.command = function() {
  	this.elements('css selector', 'button#onesignal-slidedown-cancel-button', function (notify) {
		if (notify.value.length === 0) {
			console.log('no notification');
		} else {
			this.click('button#onesignal-slidedown-cancel-button');
		}
	});
	return this;
};
