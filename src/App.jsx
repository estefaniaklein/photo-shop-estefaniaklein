import './App.css';
import NavBar from './components/common/NavBar';
import ItemListContainer from './components/common/ItemListContainer';
import ItemDetailContainer from './components/common/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import CartView from './components/common/CartView';
import OrderForm from './components/common/OrderForm';

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
              {/* <Route path='/order' element= {<OrderForm/>}/> */}
          </Routes>

      </main>
    </div>
  );
}

export default App;
