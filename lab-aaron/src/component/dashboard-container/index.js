import React from 'react';
import {connect} from 'react-redux';
import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-form';
import ExpenseForm from '../expense-form';

class DashBoardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__'. this);
    this.props.expenseCreate({title: "use me maybe?"});
  }

  render() {
    return (
      <main className="main-content">
        <h2>Expense DashBoard</h2>
        <ExpenseForm
        buttontext="create expense"
        onComplete={this.props.expenseCreate}/>

        {this.props.expenses.length ?
          return <div key{item.id}>
            <h3>{item.title}</h3>
          </div>;
        }
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);