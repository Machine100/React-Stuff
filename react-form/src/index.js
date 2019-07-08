import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const dog = {
	sound:'bark',
	makenoise: function(){console.log(this.sound)}
	}

console.log (dog)
console.log (dog.sound)
console.log (dog.makenoise)
dog.makenoise()

function cat (){
	var noise = 'meow'
	var i = 0
	function makenoise(){console.log(noise, i); i++}
	return makenoise
	}

var y = cat()
console.log (y)
y()
y()
y()



//console.log (cat)
//console.log (cat.sound)
//console.log (cat.makenoise)
//cat.makenoise()
// var y = cat.makenoise()
// y()






ReactDOM.render(<App />, document.getElementById('root'));

