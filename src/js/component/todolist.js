import React from "react";
import { useState } from "react";

export function ToDoList() {
	const [input, setInput] = useState("");
	const [task, setTask] = useState([]);
	const [counter, setCounter] = useState(0);

	const handleEnter = () => {
		if (input !== "") {
			let newArray = [...task, input];
			setTask(newArray);
			setInput("");
			setCounter(counter + 1);
		}
	};

	// cuidado con el filter, para usar el filter con el estricto (!==) se debe pasar ()=>handleRemoveItem(i) porque si se usa e=>handleRemoveItem(e.target.id) este pasa usualmente un string por lo que no funciona.

	const handleRemoveItem = id => {
		let filterTasks = task.filter((tarea, tareaId) => id !== tareaId);
		setTask(filterTasks);
		setCounter(counter - 1);
	};

	return (
		<div className="card text-center p-0">
			<div className="card-header">
				<h1>To Do:</h1>
			</div>
			<div className="card-body content">
				<input
					type="text"
					value={input}
					placeholder="Add a task"
					onChange={e => setInput(e.target.value)}
					onKeyPress={e => (e.key === "Enter" ? handleEnter() : "")}
				/>
				{task.map((valor, i) => (
					<h5 id={i} key={i} onClick={() => handleRemoveItem(i)}>
						{valor}
					</h5>
				))}
			</div>
			<div className="card-footer text-muted contador">{counter}</div>
		</div>
	);
}
