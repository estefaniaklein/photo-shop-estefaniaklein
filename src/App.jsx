import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import ItemListContainer from './components/common/ItemListContainer';
import ItemCount from './components/common/ItemCount';

function App() {
  return (
    <div className='App'>        
      <header className="bg-white shadow">        
        <NavBar/>  
      </header>
      <main className='items-center'>
        <ItemListContainer greeting="Bienvenid@ a Photo Shop"/>
      </main>
    </div>
  );
}

export default App;
