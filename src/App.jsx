import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import ItemListContainer from './components/common/ItemListContainer';
import ItemCount from './components/common/ItemCount';
import ItemDetailContainer from './components/common/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      
     
      <main className='items-center'>   
        <BrowserRouter>
          <header className="bg-white shadow">        
            <NavBar/>
          </header>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenid@ a Photo Shop"/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/photo/:photoId' element= {<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
