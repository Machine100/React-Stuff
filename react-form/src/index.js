import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const dog = {
	sound: 'bark',
	makenoise: function(){console.log(this.sound)}
}

console.log (dog.sound)
console.log (dog.makenoise)
dog.makenoise()
var x = dog.makenoise.bind(dog)
console.log (x)
x()















ReactDOM.render(<App />, document.getElementById('root'));

