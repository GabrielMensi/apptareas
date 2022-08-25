import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/listadetareas.css';
import Tarea from "./tarea";


function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()) { //verificamos que no este vacia
            tarea.texto =tarea.texto.trim(); //quitamos espacios innecesarios
            const tareasActualizadas = [tarea, ...tareas]; //generamos un arreglo con todas las tareas anteriores y la nueva
            setTareas(tareasActualizadas); //actualizamos el estado
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return(
        <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className="tarea-lista-contenedor">
            {
             tareas.map((tarea) =>
             <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea} />
             )
            }
        </div>
        </>
    )
}
export default ListaDeTareas