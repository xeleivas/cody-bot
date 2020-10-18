const music = require('../music');

module.exports = {
	name: 'play',
    description_en: 'Play music from yt',
	description_es: 'Reproduce musica de yt',
	execute(message, args) {
		if (message.channel.type === 'dm') return;

		const serverQueue = music._queue.get(message.guild.id);
		music.executeQueue(message, serverQueue);
	},
};