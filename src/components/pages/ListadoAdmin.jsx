import { Link } from "react-router-dom";
import { global } from "../../helpers/global"
import { Request } from "../../helpers/Request"
export const ListadoAdmin = ({ Articulos, setArticulos }) => {

    const deleteItem = async (id) => {
        const del = await Request(global.url + "articulo/" + id, "DELETE");

        let ArticlesActually = Articulos.filter(articulos => articulos._id != id)

        setArticulos(ArticlesActually)
    }
    return (
        Articulos.map(articulos => {
            return (
                <article className="article__item" key={articulos._id}>

                    <section className="article__mask">
                        {articulos.image != 'image.png' && <img src={global.url + "imagen/" + articulos.image} className='article__img' alt="IMG" />}
                        {articulos.image == 'image.png' && <img src='https://imgs.search.brave.com/8IRxZseDMmQR4jomnAmTwkjlFDN5kLqxTRcW6GZQimk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/OTQxOTQ3L2VzL3Zl/Y3Rvci9ib2NldG9z/LWdhbGxpbmVyby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/djliSFZsRGQwS01M/R2JDWnpBLTFEXy1P/UE8zaXF1Qmo3VXlV/WDBWN09vZz0' className='article__img' alt="IMG" />}
                    </section>
                    <section className="article__content">
                        <Link to={'/articulo/' + articulos._id} className="article__title">{articulos.titulo}</Link>
                        <p className="article__description">{articulos.description}</p>

                        <Link to={"/editar/" + articulos._id} className="article__edit">Edit</Link>
                        <button className="article__delete" onClick={(() => {
                            deleteItem(articulos._id)
                        })}>Delete</button>
                    </section>
                </article>
            )
        })
    )
}
