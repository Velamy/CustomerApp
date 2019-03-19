import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';
import { fetchCustomers } from './../actions';
import { getCustomers } from './../selectors/customers';


class CustomersContainer extends Component {
  componentDidMount(){
    this.props.fetchCustomers();
  }
  handleAddNew = () => {
    this.props.history.push("customers/new");
  }
  renderBody = () => (
    <div>
      <CustomersList
        customers={this.props.customers}
        urlPath={'customers'}/>
      <CustomersActions>
        <button onClick={this.handleAddNew}> Nuevo Cliente </button>
      </CustomersActions>
    </div>
  )

render(){
    return(
      <div>
        <AppFrame
          header={'Lista de Clientes'}
          body={this.renderBody()}>
        </AppFrame>
      </div>
    )
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
}
const mapDispatchToProps = {fetchCustomers};
/*const mapDispatchToProps = dispatch => (
  {
    fetchCustomers: () => dispatch(fetchCustomers())
  }
)*/
CustomersContainer.defaultProps = {
  customers: [  ]
}
const mapStateToProps = state => ({
  customers: getCustomers(state),
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CustomersContainer));
