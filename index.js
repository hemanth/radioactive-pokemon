var pokemonURL = 'http://img.pokemondb.net/artwork/',
	// Randomness TBD
	//charsURL = './chars.json',
	//defaultChar = radioactive.cell('pikachu')
	pokeMon = function () {
		radioactive.react(function () {
			face = radioactive.data('#input');
			$('.pokemon').error(function (ev) {
				$(this).hide();
			}).load(function () {
				$(this).show();
			}).attr('src', pokemonURL + face() + '.jpg');
		});
	},
	rand = function () {
		chars = radioactive.data(charsURL);
		chars[~~(Math.random() * chars.length)];
		//TDB
	};

$(function () {
	pokeMon();
});
