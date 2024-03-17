import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsarContexto from "../context/UsarContexto.jsx";
import Layout from "../components/Layout.jsx";
import Home from "../containers/Home.jsx"
import Somos from "../containers/Somos.jsx";
import Pokemones from "../containers/Pokemones.jsx";
import Pokemon from "../containers/Pokemon.jsx";
import Favoritos from "../containers/Favoritos.jsx";

function Rutas() {
    return ( 
        <BrowserRouter>
            <UsarContexto>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/somos" element={<Somos />}></Route>
                        <Route path="/pokemones" element={<Pokemones />}></Route>
                        <Route path="/pokemones/*" element={<Pokemon />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </Layout>
            </UsarContexto>
        </BrowserRouter>
     );
}

export default Rutas;