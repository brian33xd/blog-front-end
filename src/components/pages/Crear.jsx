import { useForm } from "../../hooks/useForm"
import { Request } from '../../helpers/Request'
import { global } from '../../helpers/global'
import { useState } from "react";


export const Crear = () => {

  const { formulario, rellenar, cambiar } = useForm({});
  const [guardado, setGuardado] = useState('')

  const guardarArticulo = async (e) => {
    e.preventDefault();

    let newArticle = { ...formulario };

    const { datos } = await Request(global.url + 'crear', 'POST', newArticle)

    if (datos.status === 'success') {
      setGuardado('Guardado')
    } else {
      console.log('Fue subir datos')
      console.log(newArticle)
      setGuardado('error')

    }

    const fileInput = document.querySelector("#file0");



    if (datos.status === 'success' && fileInput.files[0]) {

      setGuardado('Guardado')

      const formData = new FormData();

      formData.append('file0', fileInput.files[0]);

      const subirImagen = await Request(global.url + 'subir-image/' + datos.articulo._id, 'POST', formData, true)

      if (subirImagen.datos.status == 'success') {
        setGuardado('Guardado')
      } else {
        console.log('fui subir imagen')
        setGuardado('error')
      }
    }


  }
  return (
    <div className="create">
      <h1 className='create__title'>Crear articulo</h1>
      <p className="create__description">Formulario para crear un articulo</p>

      <strong className="create__strong">{guardado === 'Guardado' ? 'Se ha guardado el articulo' : ''}</strong>
      <strong className="create__strong">{guardado === 'error' ? 'Faltan datos en el archivo' : ''}</strong>

      <form className="form" onSubmit={guardarArticulo}>


        <div className="form__group">
          <label htmlFor="titulo" className="form__label">Titulo</label>
          <input type='text' name='titulo' className="form__input" onChange={cambiar} />
        </div>

        <div className="form__group">
          <label htmlFor="description" className="form__label">Descripción</label>
          <textarea name='description' className="form__input form__textarea" onChange={cambiar} />
        </div>

        <div className="form__group">
          <label htmlFor="corno" className="form__label">Categorias</label>
          <input type='text' name="corno" className="form__input" onChange={cambiar} />
        </div>

        <div className="form__group">
          <label htmlFor="file0" className="form__label">Subir Imagen</label>
          <input type='file' name='file0' id='file0' className="form__input" />
        </div>

        <input type="submit" value='Crear' className="form__btn btn-success" />
      </form>
    </div>
  )
}
