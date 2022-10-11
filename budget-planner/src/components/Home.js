import React from "react";
import Budget from "./Budget";
import ExpenseTotal from "./ExpenseTotal";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import RemainingBudget from "./Remaining";
import { AppProvider } from "../context/AppContext";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <AppProvider>
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default Home;
