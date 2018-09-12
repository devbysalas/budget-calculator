import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";
import Balance from "./Balance";
import Table from "./Table";
import {
  getPercentage,
  getPercentageUsed,
  getUserPercentage
} from "../helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          id: 1,
          name: "Diezmos",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 2,
          name: "Ahorros",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 3,
          name: "Comida",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 13,
          difference: 0
        },
        {
          id: 4,
          name: "Servicios Publicos",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 5,
          name: "Vivienda",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 25,
          difference: 0
        },
        {
          id: 6,
          name: "Transporte",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 15,
          difference: 0
        },
        {
          id: 7,
          name: "Medico",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 3,
          difference: 0
        },
        {
          id: 8,
          name: "Ropa",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 8,
          difference: 0
        },
        {
          id: 9,
          name: "Personal",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 8,
          difference: 0
        },
        {
          id: 10,
          name: "Deudas",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 0,
          difference: 0
        },
        {
          id: 11,
          name: "Recreasion",
          amount: 0,
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 8,
          difference: 0
        }
      ],
      income: 0,
      totalExpenses: 0,
      percentageUsed: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.rowChange = this.rowChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const value = event.target.value;

    this.setState(prevState => {
      return {
        income: value,
        percentageUsed: getPercentageUsed(
          prevState.income,
          prevState.totalExpenses
        ),
        expenses: this.populateRecommended(value)
      };
    });
  }

  populateRecommended(income) {
    return this.state.expenses.map(expense => {
      const recommendedAmount = getPercentage(
        income,
        expense.recommendedPercentage
      );
      return { ...expense, recommendedAmount };
    });
  }

  populateActualPercentaje(id, value) {
    // return this.state.expenses.map(expense => {
    //   const percentage = getUserPercentage(this.state.income, value);
    //   return { ...expense, percentage };
    // });
    console.log(id, value);
  }

  rowChange(id, value) {
    value = parseInt(value);
    // console.log(id);
    // console.log(this.state.expenses[id - 1]);
    this.populateActualPercentaje(id, value);
  }

  render() {
    const income = this.state.income;

    return (
      <div className="App">
        <Header />
        <div className="container">
          <Card income={income} handle={this.handleChange} />
          <Table data={this.state.expenses} edit={this.rowChange} />
          <Balance
            total={this.state.totalExpenses}
            percentage={this.state.percentageUsed}
          />
        </div>
      </div>
    );
  }
}

export default App;
