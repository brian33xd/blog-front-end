import { useState } from 'react'

export const Formulario = () => {

    const [Activado, setActivado] = useState('')

    const activateChoice = (e) => {
        setActivado(e.target.value)
    }
    return (
        <form className="contact__form">
            <span className="contact__choose">ELIGE UNA :</span>

            <div className="contact__choises">
                <input type="radio" name="choise" value="kindof" id='commun' className="contact__input-radio" />
                <label htmlFor="commun">Comunidad</label>


                <input type="radio" name="choise" value="kindof" id="pub" className="contact__input-radio" />
                <label htmlFor="pub">Publicidad</label>


                <input type="radio" name="choise" value="kindof" id="colab" className="contact__input-radio" />
                <label htmlFor="colab">Colaboración</label>
            </div>

            <div className="contact__info">
                <input type="text" className="contact__input" placeholder="Nombre*" name="nombre" />
                <input type="text" className="contact__input" placeholder="Apellido*" name="apellido" />
                <input type="email" className="contact__input" placeholder="Email*" name="email" />
                <input type="tel" className="contact__input" placeholder="Teléfono*" name="telefono" />
            </div>
            <span className="contact__else">cualquier duda o consulta no dudes en contactarnos.</span>

            <button type="submit" className="contact__send">Enviar</button>
        </form>
    )
}
