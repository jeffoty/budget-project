import React, { useState } from 'react';



const AddExpenseForm = (props) => {

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		
		const expense = {
			name: name,
			cost: parseInt(cost),
		};

		console.log(expense);

		fetch("https://otybudget.herokuapp.com/expenses", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(expense)
		})
		.then(res => console.log(res))

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;