import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import ItemListContainer from './components/common/ItemListContainer';
import ItemCount from './components/common/ItemCount';
import ItemDetailContainer from './components/common/ItemDetailContainer';

function App() {
  return (
    <div className='App'>        
      <header className="bg-white shadow">        
        <NavBar/>  
      </header>
      <main className='items-center'>
        {/* <ItemListContainer greeting="Bienvenid@ a Photo Shop"/> */}
        <ItemDetailContainer id={3}/>
      </main>
    </div>
  );
}

export default App;
