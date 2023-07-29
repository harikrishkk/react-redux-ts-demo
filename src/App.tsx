// import { useSelector } from 'react-redux';
import './App.css';
import Counter from './app/features/counter/Counter';
import { useGetPokemonByNameQuery } from './app/services/pokemon';

function App() {
  const { data, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  if (isLoading) {
    return <h1> Loading..</h1>;
  }
  console.log(data);
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
