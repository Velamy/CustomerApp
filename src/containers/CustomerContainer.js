import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import { getCustomerByDni } from './../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
//{<p>Datos del Cliente {this.props.customer.name} </p>}

class CustomerContainer extends Component {
  renderBody = () => (
    <Route path='/customers/:dni/edit' children={
      ({ match }) => (
        match ?
        <CustomerEdit {...this.props.customer}/> :
        <CustomerData {...this.props.customer}/>)
    }/>
  )
  render(){
      console.log(this.props.customer)
    return(
      <div>
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={this.renderBody()}>
        </AppFrame>
      </div>
    )
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
}

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state,props),
})
export default connect(mapStateToProps,null)(CustomerContainer);
