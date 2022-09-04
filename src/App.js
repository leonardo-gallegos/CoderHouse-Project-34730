import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  function onAdd () {
    console.log("Added to cart")
  };

  return (
    <div className="mainContainer bg-[#ededed] min-h-screen" >
      
      <NavBar/>
      <ItemListContainer firstGreeting={ "Contador con Botón"} secondGreeting={ "Catálogo con Maps"}/>

    </div>
  );
}

export default App;
