import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Drawer from './components/Drawer'
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './action'

class App extends Component {
  render() {
    const { ui, actions } = this.props
    return (
      <div className="App">
        <NavBar actions={actions} ui={ui} />
        <Drawer actions={actions} ui={ui} />
      </div>
    );
  }
}

export default connect(state => ({ ui: state.ui }), dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
}))(App);
