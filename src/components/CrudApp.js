import React, { useState } from 'react';
import Home from './Home';
import Edit from './Edit';
import AddPerson from './AddPerson';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from '../data/data';

const CrudApp = () => {
	const [list, setList] = useState(data);

	const handleEditState = (personObj) => {
		const personToEdit = list.find((person) => person.id === personObj.id);
		Object.assign(personToEdit, personObj);
	};

	const handleDelete = (id) => {
		const newList = list.filter((li) => li.id !== id);
		setList([...newList]);
	};

	return (
		<div className='container-fluid'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								list={list}
								handleEditState={handleEditState}
								handleDelete={handleDelete}
							/>
						}
					/>
					<Route path='/addperson' element={<AddPerson list={list} />} />
					<Route
						path='/edit/:id'
						element={<Edit list={list} handleEditState={handleEditState} />}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default CrudApp;
