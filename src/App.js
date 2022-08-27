import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="mainContainer bg-[#cccccc] min-h-screen" >
      
      <NavBar/>
      <ItemListContainer greeting={"Welcome!"}/>

    </div>
  );
}

export default App;
