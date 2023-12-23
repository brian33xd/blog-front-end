import { useEffect, useState } from 'react'
import { global } from '../../helpers/global'
import { Request } from '../../helpers/Request'
import { Listado } from './Listado';
import { ListadoAdmin } from './ListadoAdmin';
import { Crear } from './Crear';
export const Admin = () => {
    const [Articulos, setArticulos] = useState([]);
    const [Cargando, setCargando] = useState('true')

    const getArticulos = async () => {
        const { datos, cargando } = await Request(global.url + 'articulos', "GET")

        if (datos.status === 'success') {
            setArticulos(datos.articulos)
        }
        setCargando(cargando)
    }

    useEffect(() => {
        getArticulos()
    }, [])
    return (
        <main className="articles">

            {Cargando ? '<h1 className="Cargando-articles">Cargando...</h1>' :
                Articulos.length >= 1 ?
                    (
                        <>
                            <Crear />
                            <ListadoAdmin Articulos={Articulos} setArticulos={setArticulos} />

                        </>
                    )
                    : (<>
                        <h1 className='articles__empty'>No hay articulos</h1>
                        <Crear />
                    </>)
            }


        </main>
    )
}
