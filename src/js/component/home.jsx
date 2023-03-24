import React, { useState } from "react";

const Home = () => {
	const [tarea, setTareas] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleAddTask = () => {
		  setTareas([...tarea, inputValue]);
		  setInputValue('');
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
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
					{tarea.map((elem, index) => (
					<li className="list-group-item"> {elem} </li>
					))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
