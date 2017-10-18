const { Command } = require('klasa');
const snek = require('snekfetch');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['randomcat', 'meow'],
			description: 'Grabs a random cat image from random.cat.',
			extendedHelp: 'This command grabs a random cat from "http://random.cat/meow".'
		});
	}

	async run(msg) {
		const { body: { file } } = await snek.get('http://random.cat/meow');
		return msg.channel.sendFile(file, `cat.${file.split('.')[2]}`);
	}

};
