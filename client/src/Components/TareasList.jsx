import {useEffect, useState} from "react";
import {getAllTareas} from '../api/tareas.api.js'
import {TareaCard} from "./TareaCard.jsx";

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
            {tareas.map((tarea) => (
                <TareaCard key = {tarea.id} tarea = {tarea} />))}
        </div>
    )
}