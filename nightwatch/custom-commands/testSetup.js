exports.command = async function() {
	await this.url(`${this.launch_url}`);
	await this.window.maximize();
	await this.cmpDismissal();
};
