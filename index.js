'use strict';
const alfy = require('alfy');

const ONE_DAY = 86400000;

alfy.fetch('https://firebase.google.com/_s/getsuggestions?p=%2F&s=firebase&c=2', {
	maxAge: ONE_DAY,
	transform: result => {
		return result['/'].map(x => ({
			title: x.t,
			url: x.p
		}));
	}
}).then(result => {
	const items = alfy
		.inputMatches(result, 'title')
		.map(x => {
			const url = `https://firebase.google.com${x.url}`;

			return {
				title: x.title,
				autocomplete: x.title,
				arg: url,
				quicklookurl: url
			};
		});

	if (items.length === 0) {
		const url = `https://firebase.google.com/s/results/?q=${alfy.input}&p=%2F`;

		items.push({
			title: `Show all results for '${alfy.input}'`,
			arg: url,
			quicklookurl: url
		});
	}

	alfy.output(items);
});
