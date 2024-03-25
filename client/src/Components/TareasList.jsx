import {useEffect, useState} from "react";
import {getAllTareas} from '../api/tareas.api.js'

export function TareasList() {

    const [tareas, setTareas] = useState([])

    useEffect(() => {
        async function loadTareas() {
            const res = await getAllTareas()
            setTareas(res.data);
            console.log(res.data);
        }
        loadTareas();
    }, [])

    return (
        <div>
            {tareas.map(tarea => (
                <div key={tarea.id}>
                    <h1>{tarea.titulo}</h1>
                    <p>{tarea.descripcion}</p>
                </div>
            ))}
        </div>
    )
}