import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';


const background =(
  <img 
  className = 'background'
   alt = 'ocean' 
   src = '/images/ocean.jpg'/>
   )
  
  /*
Use a for...in loop to iterate over the animals object that we’re importing on line 1. Before the animalFacts definition, define an images array. For each animal, add a new <img /> to that array.
Assuming animal is the placeholder variable in your for...in loop, each image should have the following attributes:*/
let images=[];
 for (let animal in animals){
  images.push( <img 
  key={animal}
   className='animal'
   onClick={displayFact}
   alt={animal}
   src={animals[animal].image}
    aria-label={animal}
     role='button' /> 
     )
 }

const animalFacts = (
  <div>
  <h1>{title===''? 'Click an animal for a fun fact': title }</h1>
   {background}
   <div className='animals'>
   {images}
   </div>
   <p id='fact'>
   </p>
  </div>
)
 

ReactDOM.render(animalFacts, document.getElementById("root"));

 function displayFact (e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
 const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
 const funFacts = animalInfo.facts[optionIndex] 
  document.getElementById('fact').innerHTML= funFacts ; 
 }

 const showBackground = true;
