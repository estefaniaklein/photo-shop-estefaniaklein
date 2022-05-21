import NavBar from './components/NavBar';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import CartView from './pages/CartView';

function App() {
  return (
    <div className='App'>
      
     
      <main className='items-center'>   
        
          <header className="bg-white shadow">        
            <NavBar/>
          </header>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenid@ a Photo Shop"/>} />
              <Route path='/cart' element={<CartView/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/photo/:photoId' element= {<ItemDetailContainer/>}/>
          </Routes>

      </main>
    </div>
  );
}

export default App;
