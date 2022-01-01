import './App.css';
import { useEffect, useState } from 'react';

function App(props) {
  const [pokemon, setPokemon] = useState([]);
  const q = props.q

  useEffect(() => {
    async function fetchPokemon() {
      const response = await props.db.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("pokemon"))),
          q.Lambda(item => q.Get(item))
        )
      )
      
      let updatedPokemon = response.data.map(item => {
          return item.data
      })

      setPokemon(updatedPokemon)
    }

    fetchPokemon()
  }, [])

  
  return (
    <div className="App">
      <div className="home">
        <h3>Pokemon</h3>
        <section className="grid">
          {
            pokemon.map(p => {
              return (
                <div key={p.id}>
                  <h6>{p.name}</h6>
                  <img src={p.imageUrl} alt={p.name} className="pokemon"/>
                </div>
              )
            })
          }
        </section>
      </div>
    </div>
  );
}

export default App;
