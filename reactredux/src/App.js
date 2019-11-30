import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './Actions/simpleAction';
import PropTypes from 'prop-types';
class App extends React.Component {

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  render() {
   // const {emp}=this.props;
   return (
    <div className="App">
     <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
     </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload
      </p>

     <button onClick={this.simpleAction}>Test redux action</button>
     <pre>
      {
        JSON.stringify(this.props.test.result)
      }
      </pre>
    </div>
   );
  }
 }
//  App.propTypes = {
//   emp: PropTypes.array.isRequired   
// };
const mapStateToProps = state => ({
  ...state
  //emp:state.test.result
 })

 export default connect(mapStateToProps,{simpleAction})(App);
