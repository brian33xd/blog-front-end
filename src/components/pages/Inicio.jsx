import imagenWEBP from "../../assets/ramen2.webp";

import { global } from "../../helpers/global";
import { useState, useEffect } from "react";
import { Request } from "../../helpers/Request";
import { Link } from "react-router-dom";
export const Inicio = () => {
  const [Articulo, setArticulo] = useState({});

  useEffect(() => {
    getArticulo();
  }, []);

  const getArticulo = async () => {
    const { datos } = await Request(
      global.url + "articulo/657b6491188ddcc080c00855",
      "GET"
    );

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
  };
  return (
    <main className="content__inicio">
      <section className="inicio__description">
        <section className="inicio__destacado">
          <h5 className="inicio__title">Destacado de la semana</h5>

          {Articulo ? (
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
              <Link to={"/articulo/" + Articulo._id} className="article__more">
                {" "}
                LEER MÁS <i className="bx bx-right-arrow-alt bx-fade-right"></i>
              </Link>
            </article>
          ) : (
            <h2>No hay articulos</h2>
          )}
        </section>

        <section className="inicio__destacado">
          <h5 className="inicio__title">Última publicación</h5>
          {Articulo ? (
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
              <Link to={"/articulo/" + Articulo._id} className="article__more">
                {" "}
                LEER MÁS <i className="bx bx-right-arrow-alt bx-fade-right"></i>
              </Link>
            </article>
          ) : (
            <h2>No hay articulos</h2>
          )}
        </section>
      </section>

      <img src={imagenWEBP} alt="" className="inicio__ramen" />
    </main>
  );
};
