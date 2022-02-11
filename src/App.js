import react from "react";

//Componentes
import Header from "./components/Header";
import EditarProducto from "./components/EditarProducto";
import NuevoProducto from "./components/NuevoProducto";
import Productos from "./components/Productos";

import store from "./store";
import { Provider } from "react-redux";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <div className="container">
          <Routes>
            <Route  exact path="/"  element={<Productos/>}/>
            <Route  exact path="/productos/nuevo"  element={<NuevoProducto/>}/>
            <Route  exact path="/productos/editar/:id"  element={<EditarProducto/>}/>
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
