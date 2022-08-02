module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{json,html,css,js,txt,png,md,jpeg,svg,jsx}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};