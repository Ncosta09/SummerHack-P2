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
                        <Route path="/SummerHack-P2/" element={<Home />}></Route> {/*cambios: /SummerHack-P2 */}
                        <Route path="/SummerHack-P2/somos" element={<Somos />}></Route> {/*cambios: /SummerHack-P2 */}
                        <Route path="/SummerHack-P2/pokemones" element={<Pokemones />}></Route> {/*cambios: /SummerHack-P2 */}
                        <Route path="/SummerHack-P2/pokemones/*" element={<Pokemon />}></Route> {/*cambios: /SummerHack-P2 */}
                        <Route path="/SummerHack-P2/favoritos" element={<Favoritos />}></Route> {/*cambios: /SummerHack-P2 */}
                    </Routes>
                </Layout>
            </UsarContexto>
        </BrowserRouter>
     );
}

export default Rutas;