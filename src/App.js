import { Footer } from "./Componentes/ComponenteFuncion/Footer";
import {ItemDetailContainer} from "./Componentes/ComponenteFuncion/ItemDetailContainer"
import { Cart } from "./Componentes/ComponenteFuncion/Cart";
import { ItemListContainer } from "./Componentes/ComponenteFuncion/ItemListContainer";
import { NavBar } from "./Componentes/ComponenteFuncion/NavBar";
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import CartContextProvider from "./Componentes/ComponenteFuncion/context/CartContext";
import { CheckOut } from "./Componentes/ComponenteFuncion/CheckOut";
import { ThankYou } from "./Componentes/ComponenteFuncion/ThankYou";

function App() {
  return (
    <CartContextProvider>
      <div >
          <BrowserRouter>
          <NavBar/> 
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/categoria/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/CheckOut"} element={<CheckOut/>}/> 
            <Route path={"/ThankYou/:id"} element={<ThankYou/>}/>
          </Routes>
          <Footer/>
          </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
