export function TareaCard({tarea}) {
    return (
        <div>
            <h1>{tarea.titulo}</h1>
            <p>{tarea.descripcion}</p>
            <hr/>
        </div>
    )
}