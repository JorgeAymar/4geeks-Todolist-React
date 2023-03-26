import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    //Estado de la lista de tareas, inicialmente vacío
	const [tarea, setTareas] = useState([]);
	//Estado del input de la nueva tarea, inicialmente vacío
	const [inputValue, setInputValue] = useState('');

	//Agrega una tarea a la lista
	const handleAddTask = () => {
		if (inputValue.trim() !== '') {
			//Crea un nuevo objeto tarea y lo agrega a la lista de tareas
			const miObj = {
				label: inputValue,
				done: false
			}
			setTareas([...tarea, miObj]);
			//Vuelve a poner en blanco el input
			setInputValue('');
		}
	};

	//Maneja el cambio en el input de la nueva tarea
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};  

	//Elimina una tarea de la lista, dada su posición
	const handleDeleteTask = (index) => {
		//Filtra la lista de tareas para quitar la tarea con la posición dada
		const newTasks = tarea.filter((_, i) => i !== index);
		setTareas(newTasks);
	};

	return (
		<div>
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-8 col-sm-10">
						<h1 className="text-center mb-5">Todo List</h1>

						<div className="form-group bg-info p-3">
							<input
								className="form-control mb-3"
								type="text"
								id="todo-input"
								value={inputValue}
								onChange={handleInputChange}
								name="text"
								autoComplete="off"
								placeholder="Ingrese una tarea"
							/>
							<button
								className="btn btn-outline-secondary"
								type="button"
								onClick={handleAddTask}
							>
								Agregar tarea
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row mx-auto" style={{width: "640px"}}>
					<ul className="list-group">
						{tarea.length === 0 ? (
							//Muestra un mensaje si no hay tareas en la lista
							<li className="list-group-item text-center">No hay tareas, añadir tareas</li>
						) : (
							//Muestra cada tarea en la lista, junto con un botón para eliminarla
							tarea.map((elem, index) => (
								<li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
									{elem.label}
									<button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteTask(index)}>
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;

