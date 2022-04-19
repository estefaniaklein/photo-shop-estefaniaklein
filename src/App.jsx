import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import ItemListContainer from './components/common/ItemListContainer';

function App() {
  return (
    <div className='App'>        
      <header>        
        <NavBar/>  
      </header>
      
      <ItemListContainer greeting="Bienvenid@ a Photo Shop"/>
    </div>
  );
}

export default App;
