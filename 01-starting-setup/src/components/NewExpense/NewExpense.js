import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [formIsVisible, setIsFormVisible] = useState(false);

    const hideForm = () =>{
        setIsFormVisible(false);
    }
    const showForm = () =>{
        setIsFormVisible(true);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
        hideForm();
    };
    return (
        <div className="new-expense">
            {!formIsVisible && <button type="button" onClick={showForm}>Add New Expense</button>}
            {formIsVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelNewExpense={hideForm} />}
        </div>
    );
};

export default NewExpense;