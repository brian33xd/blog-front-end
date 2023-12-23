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
          <Route path='bloganime.vercel.app/' element={<Inicio />} />
          <Route path='bloganime.vercel.app/inicio' element={<Inicio />} />
          <Route path='bloganime.vercel.app/admin' element={<Admin />} />
          <Route path='bloganime.vercel.app/articulos' element={<Articulos />} />
          <Route path='bloganime.vercel.app/sobre-mi' element={<About />} />
          <Route path='bloganime.vercel.app/contacto' element={<Contacto />} />
          <Route path='bloganime.vercel.app/buscar/:buscar' element={<Busqueda />} />
          <Route path='bloganime.vercel.app/articulo/:art' element={<Articulo />} />
          <Route path='bloganime.vercel.app/editar/:edit' element={<Editar />} />

          <Route path='*' element={<div className='error'><h1>No se ha encontrado ninguna página</h1>
            <NavLink to='/'>Volver al inicio</NavLink></div>} />
        </Routes>
      </section>

    </BrowserRouter>
  )
}
