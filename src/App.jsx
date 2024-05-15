import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemCount from "./components/itemcount/ItemCount";
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

    <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvennido"/>}/>
        <Route path="/category/:idCategory" element={<ItemListContainer saludo="Bienvennido"/>}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
