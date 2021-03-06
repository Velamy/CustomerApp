import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import './App.css';

class App extends Component {
  renderCustomerNewContainer = () => <h1> Customer New Container </h1>;

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={CustomersContainer}/>
          <Switch>
            <Route exact path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route exact path="/customers/:dni/edit" render={props => <CustomerContainer dni={props.match.params.dni}/>}/>
            <Route exact path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
