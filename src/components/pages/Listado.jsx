import { Link } from "react-router-dom";
import { global } from "../../helpers/global"

export const Listado = ({ Articulos }) => {

    return (
        Articulos.map(articulos => {
            return (
                <article className="article__item" key={articulos._id}>

                    <section className="article__mask">
                        <span className='article__tag'>{articulos.corno}</span>
                        {articulos.image != 'image.png' && <img src={global.url + "imagen/" + articulos.image} className='article__img' alt="IMG" />}
                        {articulos.image == 'image.png' && <img src='https://imgs.search.brave.com/8IRxZseDMmQR4jomnAmTwkjlFDN5kLqxTRcW6GZQimk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/OTQxOTQ3L2VzL3Zl/Y3Rvci9ib2NldG9z/LWdhbGxpbmVyby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/djliSFZsRGQwS01M/R2JDWnpBLTFEXy1P/UE8zaXF1Qmo3VXlV/WDBWN09vZz0' className='article__img' alt="IMG" />}
                    </section>
                    <section className="article__content">
                        <h3 className="article__title">{articulos.titulo}</h3>
                        <p className="article__description">{articulos.description.slice(0, 60) + '...'}</p>

                        <Link to={'/articulo/' + articulos._id} className="article__more"> LEER MÁS <i className='bx bx-right-arrow-alt bx-fade-right' ></i></Link>

                    </section>
                </article>
            )
        })
    )
}
