import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../containers/Home.jsx"
import Somos from "../containers/Somos.jsx";
import Pokemones from "../containers/Pokemones.jsx";
import Pokemon from "../containers/Pokemon.jsx";

function Rutas() {
    return ( 
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/somos" element={<Somos />}></Route>
                    <Route path="/pokemones" element={<Pokemones />}></Route>
                    <Route path="/pokemones/*" element={<Pokemon />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
     );
}

export default Rutas;