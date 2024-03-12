import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../containers/Home.jsx"
import Somos from "../containers/Somos.jsx";

function Rutas() {
    return ( 
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/somos" element={<Somos />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
     );
}

export default Rutas;