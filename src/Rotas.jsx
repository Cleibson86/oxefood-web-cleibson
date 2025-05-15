
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormcupomDesconto from './views/cupomDesconto/FormcupomDesconto';
import FormEntregador from './views/Entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="form-cupomDesconto" element={ <FormcupomDesconto/> } />


            </Routes>
        </>
    )
}

export default Rotas
