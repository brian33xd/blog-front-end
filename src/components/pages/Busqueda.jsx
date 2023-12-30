import { useEffect, useState } from "react";
import { global } from "../../helpers/global";
import { Request } from "../../helpers/Request";
import { Listado } from "./Listado";
import { useParams } from "react-router-dom";
export const Busqueda = () => {
  const [Articulos, setArticulos] = useState([]);
  const [Cargando, setCargando] = useState("true");
  const params = useParams();

  const getArticulos = async () => {
    const { datos, cargando } = await Request(
      global.url + "buscar/" + params.buscar,
      "GET"
    );

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    } else {
      setArticulos([]);
    }
    setCargando(cargando);
  };

  useEffect(() => {
    getArticulos();
  }, []);

  useEffect(() => {
    getArticulos();
  }, [params]);
  return (
    <main className="articles">
      {Cargando ? (
        <h1 className="Cargando-articles">Cargando...</h1>
      ) : Articulos.length >= 1 ? (
        <Listado Articulos={Articulos} setArticulos={setArticulos} />
      ) : (
        <h1 className="articles__empty">No hay articulos</h1>
      )}
    </main>
  );
};
