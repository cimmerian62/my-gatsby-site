import * as React from 'react'
import { useState } from "react";
import axios from "axios";
import PieApp from '../components/PieApp';


const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="enter pokemon name"
          />
        </label>
      </form>
      
      {pokemonData.map((data) => {
        
        return (
          <div>
            <img src={data.sprites["front_default"]} />
            <ul>
                <li>Type: {pokemonType}</li>
                <li>Height: {Math.round(data.height * 3.9)} inches</li>
                <li>Weight: {Math.round(data.weight / 4.3)} lbs</li>
                <li>XP: {data.base_experience}</li>
            </ul>
            <PieApp weight={data.weight} height={data.height} XP={data.base_experience}/>
          </div>
        );
      })}   
      
    </div>
  );
};

export default App;
