import React, { Component } from "react";

export default class App extends Component {
  render() {
    const pokemons = this.props.pokemon.map(pokemon => {
      return (
        <li key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>
            <strong>type:</strong> {pokemon.type}
          </p>
        </li>
      );
    });
    return (
      <div>
        <h1>pokemon</h1>
        <ul>{pokemons}</ul>
      </div>
    );
  }
}


App.defaultProps = {
  
    pokemon: [
      {
        id: 1,
        name: "Charmander",
        type: "fire",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        id: 2,
        name: "Squirtle",
        type: "water",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      },
      {
        id: 3,
        name: "Butterfree",
        type: "flying",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
      },
      {
        id: 4,
        name: "Rattata",
        type: "normal",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
      },
      {
        id: 5,
        name: "Metapod",
        type: "bug",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
      }
    ]
  }