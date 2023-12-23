import { useState } from "react";

export const useForm = (objetoInicial = {}) => {
    const [formulario, setFormulario] = useState(objetoInicial);

    const serializarForm = (formulario) => {

        const serializado = new FormData(formulario)

        let formularioCompleto = {};

        for (let [name, value] of serializado) {
            formularioCompleto[name] = value
        }

        return formularioCompleto

    }
    const rellenar = e => {
        e.preventDefault()

        let curso = serializarForm(e.target)
        setFormulario(curso);

        e.target.classList.add("rellenado")


        setTimeout(() => {
            e.target.classList.remove("rellenado")
        }, 1000)

    }

    const cambiar = ({ target }) => {
        const { name, value } = target;



        setFormulario({
            ...formulario,
            [name]: value
        })
    }
    return {
        formulario,
        rellenar,
        cambiar

    }
}