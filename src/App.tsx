import React, { FC, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Character, RootObject } from './models/Character';
import { Card } from './components/card/Card'; 
import { Bordered } from './components/BorderedComponent.tsx/Bordered';


const url = 'https://rickandmortyapi.com/api/character';

const App: FC = () => {

  const [page, setPage] = useState(1);


  const [characters, setCharacters] = useState([] as Character[]);
  // users diventa un array di oggetti User

  const loadData = async () => {
    const response = await fetch(`${url}?page=${page}`);
    const {results} = await response.json() as RootObject;
    setCharacters(results);
    console.log(results);
  }

  useEffect(() => {
    loadData();
  }, [page])


  return (
  <>

  <p>{characters.length}</p>
  {
    characters.map(item => 
      <Bordered>
      <Card character={item} >
      </Card>
    </Bordered>)
  }
  <br/>
  <button onClick={() => setPage(page -1)} >Precedente</button>
  <p>{page}</p>
  <button onClick={() => setPage(page + 1)} >Successivo</button>
 </>
  )
}



export default App;
