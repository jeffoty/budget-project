import React, {  useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseList = () => {

	const [expenses, setExpenses] = useState([])
	const [setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		fetch("https://otybudget.herokuapp.com/expenses")
		.then(res => res.json())
		.then(expenses => setExpenses(expenses))
		
	}, []);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{expenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;