import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import { Inicio } from '../components/pages/Inicio'
import { Articulos } from '../components/pages/Articulos'
import { Nav } from '../components/layout/Nav'
import { Busqueda } from '../components/pages/Busqueda'
import { Articulo } from '../components/pages/Articulo'
import { Editar } from '../components/pages/Editar'
import { Contacto } from '../components/pages/Contacto'
import { Admin } from '../components/pages/Admin'
import { About } from '../components/pages/About'


export const Rutas = () => {
  return (
    <BrowserRouter>
      {/*LAYOUT*/}
      <Nav />

      {/*CONTENIDO CENTRAL Y RUTAS*/}
      <section id="content" className='content'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/articulos' element={<Articulos />} />
          <Route path='/sobre-mi' element={<About />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/buscar/:buscar' element={<Busqueda />} />
          <Route path='/articulo/:art' element={<Articulo />} />
          <Route path='/editar/:edit' element={<Editar />} />

          <Route path='*' element={<div className='error'><h1>No se ha encontrado ninguna página</h1>
            <NavLink to='/'>Volver al inicio</NavLink></div>} />
        </Routes>
      </section>

    </BrowserRouter>
  )
}
