import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Funcionalidades from '../pages/Funcionalidades'
import Login from '../pages/Login'
import AdminFuncionalidades from '../pages/Admin/AdminFuncionalidades'
import AdminSobre from '../pages/Admin/AdminSobre'
import AdminContato from '../pages/Admin/AdminContato'
import PrivateRoute from '../PrivateRoute'

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/filmes" element={<Funcionalidades />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/filmes" element={<PrivateRoute><AdminFuncionalidades /></PrivateRoute>} />
            <Route path="/admin/sobre" element={<PrivateRoute><AdminSobre /></PrivateRoute>} />
            <Route path="/admin/contato" element={<PrivateRoute><AdminContato /></PrivateRoute>} />
        </Routes>
    )
}

export default Rotas