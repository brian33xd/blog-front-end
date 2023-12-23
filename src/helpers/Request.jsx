export const Request = async (url, mymethod, dataSave = '', archivos = false) => {
  let cargando = true;

  let opciones = {
    method: "GET",
  };

  if (mymethod == "GET" || mymethod == "DELETE") {
    opciones = {
      method: mymethod,
    };
  }

  if (mymethod == "POST" || mymethod == "PUT") {
    let body = JSON.stringify(dataSave);

    if (archivos) {
      opciones = {
        method: mymethod,
        body: dataSave
      }
    } else {
      opciones = {
        method: mymethod,
        body: JSON.stringify(dataSave),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

  }

  const peticion = await fetch(url, opciones);
  const datos = await peticion.json();

  cargando = false;

  return {
    datos,
    cargando,
  };
};

Request.exportName = 'Hola'