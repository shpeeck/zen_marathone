const player1 = {
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['меч', 'кинжал'],
	attack: function () {
		console.log(name + 'fight')
	}
}

const player2 = {
	name: 'Kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['меч', 'кинжал'],
	attack: function () {
		console.log(name + 'fight')
	}
}

function createPlayer(myPlayer, pl) {
	const player = document.createElement('div');
	player.classList.add(myPlayer);
	const progressbar  = document.createElement('div');
	progressbar.classList.add('progressbar');
	const character  = document.createElement('div');
	character.classList.add('character');
	const img = document.createElement('img')
	img.src = pl.img
	
	const life = document.createElement('div');
	life.classList.add('life');
	life.style.width = `${pl.hp}%`;
	const name = document.createElement('div');
	name.classList.add('name');
	name.innerText = pl.name
	
	
	progressbar.appendChild(life);
	progressbar.appendChild(name);
	character.appendChild(img);
	player.appendChild(progressbar);
	player.appendChild(character);
	
	const arenas = document.querySelector('.arenas');
	arenas.appendChild(player)
}

//createPlayer('player1', 'SCORRPION', 50);
//createPlayer('player2', 'SUB-ZERRO', 80)
createPlayer('player1', player1)
createPlayer('player2', player2)
