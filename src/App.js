import { Footer } from "./Componentes/ComponenteFuncion/Footer";
import { ItemListContainer } from "./Componentes/ComponenteFuncion/ItemListContainer";
import { NavBar } from "./Componentes/ComponenteFuncion/NavBar";

function App() {
  return (
    <div className="">
        <NavBar/>  
        <ItemListContainer greeting = {"Hola coders"}/>
        <Footer/>
    </div>
  );
}

export default App;
