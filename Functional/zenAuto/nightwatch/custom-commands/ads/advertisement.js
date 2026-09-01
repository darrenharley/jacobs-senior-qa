module.exports.command = async function() {
	await this.elements('css selector', '.img_ad', function(leaderboardAd) {
		const leaderboardAdPresent = leaderboardAd.value.length;
		if (leaderboardAdPresent === 0) {
			this.assert.elementPresent('.mpu-ad');
		} else {
			this.assert.elementPresent('.img_ad');
		}
	})
};
