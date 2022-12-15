import { Footer } from "./Componentes/ComponenteFuncion/Footer";
import { ItemDetailContainer } from "./Componentes/ComponenteFuncion/ItemDetail.Container";
import { ItemListContainer } from "./Componentes/ComponenteFuncion/ItemListContainer";
import { NavBar } from "./Componentes/ComponenteFuncion/NavBar";
import {BrowserRouter, Routes ,Route} from "react-router-dom"

function App() {
  return (
    <div >
        <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/Category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/Item/:id"} element={<ItemDetailContainer/>}/>
        </Routes>
        <ItemDetailContainer/>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
