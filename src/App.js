import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Drawer from './components/Drawer'
import GridLayout from './components/GridLayout'
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './action'

class App extends Component {
  render() {
    const { ui, layout, actions } = this.props
    return (
      <div className="App">
        <NavBar actions={actions} ui={ui} />
        <Drawer actions={actions} ui={ui} />
        <GridLayout actions={actions} layout={layout} />
      </div>
    );
  }
}

export default connect(state => ({ 
  ui: state.ui, 
  layout: state.layout 
}), dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
}))(App);
