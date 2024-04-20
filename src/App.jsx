import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer"
import './App.css'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a mi ecommerce" />
    </div>
  )
}

export default App
