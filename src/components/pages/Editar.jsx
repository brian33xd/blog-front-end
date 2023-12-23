import { useForm } from "../../hooks/useForm"
import { Request } from '../../helpers/Request'
import { global } from '../../helpers/global'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const Editar = () => {
  const [Articulo, setArticulo] = useState({});
  const { formulario, rellenar, cambiar } = useForm({});
  const [guardado, setGuardado] = useState('')

  const params = useParams();

  useEffect(() => {
    getArticulo()
  }, [])


  const getArticulo = async () => {

    const { datos } = await Request(global.url + 'articulo/' + params.edit, "GET")

    if (datos.status === 'success') {
      setArticulo(datos.articulo)
    }

  }


  const editarArticulo = async (e) => {
    e.preventDefault();

    let newArticle = formulario;

    const { datos } = await Request(global.url + 'articulo/' + params.edit, 'PUT', newArticle)

    if (datos.status == 'success') {
      setGuardado('Guardado')
    } else {
      setGuardado('error')
      console.log('fui yo los datos')
    }

    const fileInput = document.querySelector("#file");

    if (datos.status === 'success' && fileInput.files[0]) {

      setGuardado('Guardado')

      const formData = new FormData();

      formData.append('file0', fileInput.files[0]);

      const subirImagen = await Request(global.url + 'subir-image/' + params.edit, 'post', formData, true)

      if (subirImagen.datos.status == 'success') {
        setGuardado('Guardado')
      } else {
        setGuardado('error')
        console.log('fui yo, la imagen')
      }
    }


  }
  return (
    <div className="create">
      <h1 className='create__title'>Editar articulo</h1>
      <p className="create__description">Formulario para editar: {Articulo.titulo}</p>

      <strong className="warn">{guardado === 'Guardado' ? 'Se ha guardado el articulo' : ''}</strong>
      <strong className="warn">{guardado === 'error' ? 'Faltan datos en el archivo' : ''}</strong>

      <form className="form" onSubmit={editarArticulo}>
        <div className="form__group">
          <label htmlFor="titulo" className="form__label">Titulo</label>
          <input type='text' name='titulo' className="form__input" onChange={cambiar} defaultValue={Articulo.titulo} />
        </div>

        <div className="form__group">
          <label htmlFor="description" className="form__label">Descripción</label>
          <textarea name='description' className="form__input form__textarea" onChange={cambiar} defaultValue={Articulo.description} />
        </div>

        <div className="form__group">
          <label htmlFor="corno" className="form__label">Categorias</label>
          <input type='text' name="corno" className="form__input" onChange={cambiar} defaultValue={Articulo.corno} />
        </div>

        <div className="form__group">
          <label htmlFor="file0" className="form__label">Subir Archivo</label>
          <section className="article__mask">
            {Articulo.image != 'image.png' && <img src={global.url + "imagen/" + Articulo.image} className='article__img' alt="IMG" />}
            {Articulo.image == 'image.png' && <img src='https://imgs.search.brave.com/8IRxZseDMmQR4jomnAmTwkjlFDN5kLqxTRcW6GZQimk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/OTQxOTQ3L2VzL3Zl/Y3Rvci9ib2NldG9z/LWdhbGxpbmVyby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/djliSFZsRGQwS01M/R2JDWnpBLTFEXy1P/UE8zaXF1Qmo3VXlV/WDBWN09vZz0' className='article__img' alt="IMG" />}
          </section>
          <input type='file' name='file0' id='file0' className="form__input" />
        </div>

        <input type="submit" value='Editar' className="form__btn btn-success" />
      </form>
    </div>
  )
}
