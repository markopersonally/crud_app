import React from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = ({ list, handleDelete }) => {
	return (
		<div>
			<h1 className='text-center'>Crud app</h1>
			<Table striped bordered hover variant='dark' size='lg'>
				<thead>
					<tr className='text-center'>
						<th>Name:</th>
						<th>Age:</th>
						<th>Username:</th>
						<td>Options:</td>
					</tr>
				</thead>
				<tbody>
					{list && list.length > 0 ? (
						list.map((item) => {
							return (
								<tr className='text-center' key={item.id}>
									<td>{item.name}</td>
									<td>{item.age}</td>
									<td>{item.username}</td>
									<td className='d-flex align-items-sm-center justify-content-sm-evenly'>
										<Link
											className='p-1 text-center text-light text-decoration-none border border-light rounded'
											to={`/edit/${item.id}`}
										>
											Edit
										</Link>
										&nbsp;
										<Button onClick={() => handleDelete(item.id)}>
											Delete
										</Button>
									</td>
								</tr>
							);
						})
					) : (
						<p className='text-danger'>No data avaible</p>
					)}
				</tbody>
			</Table>
			<br />
			<br />
			<Link className='text-decoration-none d-grid gap-2' to='/addperson'>
				{' '}
				<Button className='btn-success' size='lg'>
					Add person
				</Button>
			</Link>
		</div>
	);
};

export default Home;
