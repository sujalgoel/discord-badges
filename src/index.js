const Badges = require('./badges');

module.exports = {
	async badges(user) {
		let Flags;
		let flags;
		if (!user) {
			throw new Error('No user is provided.');
		}
		if (user.flags === null) {
			throw new Error('The provided user doesn\'t have any Discord Badge.');
		} else {
			Flags = user.flags.toArray();
			flags = Flags.filter(b => !!Badges[b]).map(m => Badges[m]);
			if (user.avatar && user.avatar.startsWith('a_')) {
				flags.push(Badges['DISCORD_NITRO']);
			}
			return flags;
		}
	},
};