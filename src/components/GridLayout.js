import React, { Component } from 'react'
import ReactGridLayout, { WidthProvider } from 'react-grid-layout'
import Note from './Note'
import FloadBtn from './FloadBtn'

const ResponsiveReactGridLayout = WidthProvider(ReactGridLayout)

export default class GridLayout extends　Component {
  onLayoutChange = (currentLayout, allLayout) => {
    console.log(currentLayout)
    // const layout = currentLayout.map((item, index) => {
    //   return Object.assign({}, this.state.layout[index], item)
    // })
    // settings.set('layout1', layout)
    // this.setState({
    //   layout
    // })
    this.props.actions.UPDATE_LAYOUT(currentLayout)
  }
  
  renderItem = (el) => {
    return (
      <div key={el.i}>
        <Note 
          item={el} 
          removeItem={this.onRemoveItem}
        />
      </div>
    )
  }

  addNote = () => {
    this.props.actions.ADD_NOTE()
  }
  
  render() {
    const { layout } = this.props.layout
    return (
      <div>
        <ResponsiveReactGridLayout 
          className="layout" 
          layout={layout} 
          onLayoutChange={this.onLayoutChange}
          cols={24} 
          rowHeight={30}
        >
          {
            layout.map(this.renderItem)
          }
        </ResponsiveReactGridLayout>
        <div style={{position: 'fixed', right: 30, bottom: 30}}>
          <FloadBtn onClick={this.addNote} />
        </div>
      </div>
    )
  }
}