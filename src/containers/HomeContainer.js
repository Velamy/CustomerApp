import React, { Component } from 'react';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class HomeContainer extends Component {
  handleOnClick = () => {
    console.log("HandleonClick");
    this.props.history.push('/customers');
  }
  render(){
    return(
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
            Esta es la pantalla principal
            <CustomersActions>
              <button onClick={this.handleOnClick}>Listado de Clientes</button>
            </CustomersActions>
            </div>
          }/>
      </div>
    )
  }
}

export default HomeContainer;
