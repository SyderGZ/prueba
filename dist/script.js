let imagen=['https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/200px-Pikachu.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/200px-Charmander.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e3/latest/20160309230820/Squirtle.png/200px-Squirtle.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/43/latest/20190406170624/Bulbasaur.png/200px-Bulbasaur.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/34/latest/20160815220038/Raichu.png/200px-Raichu.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fb/latest/20200411222755/Charmeleon.png/200px-Charmeleon.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d7/latest/20200307022248/Wartortle.png/200px-Wartortle.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/86/latest/20190406151903/Ivysaur.png/200px-Ivysaur.png',
           'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/66/latest/20160816232213/Raichu_de_Alola.png/200px-Raichu_de_Alola.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/200px-Charizard.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/41/latest/20200411222955/Blastoise.png/200px-Blastoise.png','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/be/latest/20160309230456/Venusaur.png/200px-Venusaur.png']

let pokemons=[
  ['Pikachu',imagen[0],'electrico'],
  ['Raichu',imagen[4],'electrico'],
  ['Alola Raichu',imagen[8],'electrico'],
  ['Charmander',imagen[1],'fuego'],
  ['Charmeleon',imagen[5],'fuego'],
  ['Charizard',imagen[9],'fuego'],
  ['Squirtle',imagen[2],'agua'],
  ['Wartortle',imagen[6],'agua'],
  ['Blastoise',imagen[10],'agua'],
  ['Bulbasaur',imagen[3],'planta'],
  ['Ivysaur',imagen[7],'planta'],
  ['Venusaur',imagen[11],'planta']
]


let miHTML="<ul>";

for(i=0; i<pokemons.length; i++){
	miHTML+='<li class='+pokemons[i][2]+'>';
	miHTML+="<img src='"+pokemons[i][1]+"'>";
	miHTML+="<h2>"+pokemons[i][0]+"</h2>";
	miHTML+="<p class='tipo "+pokemons[i][2]+"'>"+pokemons[i][2]+"</h2>";
	
	miHTML+="</li>";
}

miHTML+="</ul>";

document.body.innerHTML=miHTML;


// document.getElementById('nombre').innerHTML=pokemons[2][0];
// document.getElementById('imagen').src=pokemons[2][1];
// document.getElementById('tipo').innerHTML=pokemons[2][2];


// document.write('<div>');
// document.write('<h1>'+pokemons[0][0]+'</h1>');
// document.write('<img src="'+pokemons[0][1]+'" alt="">');
// document.write('<h2>'+pokemons[0][2]+'</h2>');
// document.write('</div>')



// document.write('<div>');
// document.write('<h1>'+pokemons[1][0]+'</h1>');
// document.write('<img src="'+pokemons[1][1]+'" alt="">');
// document.write('<h2>'+pokemons[1][2]+'</h2>');
// document.write('</div>')


// document.write('<div>');
// document.write('<h1>'+pokemons[2][0]+'</h1>');
// document.write('<img src="'+pokemons[2][1]+'" alt="">');
// document.write('<h2>'+pokemons[2][2]+'</h2>');
// document.write('</div>')


// document.write('<div>');
// document.write('<h1>'+pokemons[3][0]+'</h1>');
// document.write('<img src="'+pokemons[3][1]+'" alt="">');
// document.write('<h2>'+pokemons[3][2]+'</h2>');
// document.write('</div>')