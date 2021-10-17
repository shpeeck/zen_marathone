const arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['меч', 'кинжал'],
	attack: function (name) {
		console.log(name + ' ' + 'fight')
	}
}

const player2 = {
	player: 2,
	name: 'Kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['меч', 'кинжал'],
	attack: function (name) {
		console.log(name + ' ' + 'fight')
	}
}

function createElement(tag, className) {
	const $tag = document.createElement(tag);

	if(className) {
		$tag.classList.add(className);
	}
	
	return $tag;
}

function createPlayer(pl) {
	const player = createElement('div', 'player' + pl.player);
	const progressbar  = createElement('div', 'progressbar');
	const character  = createElement('div', 'character');
	const img = createElement('img');
	img.src = pl.img
	
	const life = createElement('div', 'life');
	life.style.width = `${pl.hp}%`;
	const name = createElement('div', 'name');
	name.innerText = pl.name
	
	progressbar.appendChild(life);
	progressbar.appendChild(name);
	character.appendChild(img);
	player.appendChild(progressbar);
	player.appendChild(character);
	
	return player;
}

function randomizer() {
	return 	Math.floor(Math.random() * 20);
}

function changeHP(player) {
	const $playerLife = document.querySelector('.player'+ player.player +' .life');
	player.hp -= randomizer();
	$playerLife.style.width = player.hp + '%';

	if (player.hp <= 0) {
		$randomButton.disabled = 'true';
		player.hp = 0;

		arenas.appendChild(playerLose(player.name));
	}
}

function playerLose(name){
	const $loseTitle = createElement('div', 'loseTitle');
	// $loseTitle.innerText = name + ' lose';
	if (name == player2.name) {
		$loseTitle.innerText = player1.name + ' vin';
	}else if (name == player1.name) {
		$loseTitle.innerText = player2.name + ' vin';
	}

	return $loseTitle;
}

$randomButton.addEventListener('click', function() {
	changeHP(player1);
	changeHP(player2);
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
