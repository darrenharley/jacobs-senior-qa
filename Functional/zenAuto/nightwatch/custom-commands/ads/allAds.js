exports.command = async function() {
	await this.ads.leaderboard();
	await this.ads.mpu1();
	await this.ads.mpu2();
	await this.ads.footer();

};
