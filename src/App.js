import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Inicio from './components/Inicio'
import Personajes from './components/Personajes'


function App() {
  return (
    <div className="Contenedor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/personaje/:id" element={<Personajes/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
