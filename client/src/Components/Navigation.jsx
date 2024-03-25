import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/tareas">Tareas</Link>
                </li>
                <li>
                    <Link to="/tareas-create">Crear tarea</Link>
                </li>
            </ul>
        </nav>
    )
}