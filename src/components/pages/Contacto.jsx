import { useState } from "react"
import { Formulario } from '../layout/Formulario'

export const Contacto = () => {

    return (
        <main className="contacto__container">
            <header className="contacto__header">
                <h1 className="contacto__title">Si quieres unirte a nuestra comunidad, diviertete con nosotros, participa de eventos increibles y sorteos todos los días.</h1>
            </header>

            <div className="contacto__content">
                <section className="contacto__community">
                    <div className="community__card ">
                        <h3 className="community__title">Discord</h3>

                        <p className="community__description">
                            Vení y disfrutá con nosotros</p>
                        <span className="community__quant">Actualmente somos 8325 <i className='bx bxs-user' ></i></span>


                        <button className="community__button"><i className='bx bxl-discord-alt'></i> Unirme </button>
                    </div>

                    <div className="community__card">
                        <h3 className="community__title"><i className='bx bxl-youtube' ></i> Youtube
                        </h3>

                        <p className="community__description">
                            Únite y enterate de los últimos videos
                        </p>


                        <span className="community__quant">Actualmente somos 12053 <i className='bx bxs-user' ></i></span>


                        <button className="community__button"><i className='bx bxl-youtube' ></i> Unirme </button>
                    </div>
                </section>
                <section className="contacto__contact">
                    <h3 className="contact__title">Envianos un mensaje y nos contactaremos contigo.</h3>

                    <Formulario />
                </section>
            </div>
        </main>
    )
}
