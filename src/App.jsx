import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import ItemListContainer from './components/common/ItemListContainer';
import ItemCount from './components/common/ItemCount';

function App() {
  return (
    <div className='App'>        
      <header>        
        <NavBar/>  
      </header>
      
      <ItemListContainer greeting="Bienvenid@ a Photo Shop"/>
      <ItemCount stock={6} minimo={1}/>
    </div>
  );
}

export default App;
