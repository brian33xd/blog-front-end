import { useEffect, useState } from "react";
import { global } from "../../helpers/global";
import { Request } from "../../helpers/Request";
import { Listado } from "./Listado";
import { useParams } from "react-router-dom";
export const Articulo = () => {
  const [Articulo, setArticulo] = useState({});
  const [Cargando, setCargando] = useState("true");

  const params = useParams();

  useEffect(() => {
    getArticulo();
  }, []);

  const getArticulo = async () => {
    const { datos, cargando } = await Request(
      global.url + "articulo/" + params.art,
      "GET"
    );

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
    setCargando(false);
  };

  return (
    <>
      {Cargando ? (
        <h1 className="Cargando-articles">Cargando...</h1>
      ) : (
        <main className="article__single-container">
          <article className="article__item">
            <section className="article__mask">
              <span className="article__tag">{Articulo.corno}</span>
              {Articulo.image != "image.png" && (
                <img
                  src={global.url + "imagen/" + Articulo.image}
                  className="article__img"
                  alt="IMG"
                />
              )}
              {Articulo.image == "image.png" && (
                <img
                  src="https://imgs.search.brave.com/8IRxZseDMmQR4jomnAmTwkjlFDN5kLqxTRcW6GZQimk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/OTQxOTQ3L2VzL3Zl/Y3Rvci9ib2NldG9z/LWdhbGxpbmVyby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/djliSFZsRGQwS01M/R2JDWnpBLTFEXy1P/UE8zaXF1Qmo3VXlV/WDBWN09vZz0"
                  className="article__img"
                  alt="IMG"
                />
              )}
            </section>
            <h1 className="article__title">{Articulo.titulo}</h1>
            <p className="article__description">{Articulo.description}</p>

            <p className="article__date">Publicado el: {Articulo.fecha}</p>
          </article>
        </main>
      )}
    </>
  );
};
