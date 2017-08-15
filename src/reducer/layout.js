const layout = localStorage.getItem('layout') ?
  JSON.parse(localStorage.getItem('layout')) :
  [
    {i: 'b', x: 1, y: 0, w: 4, h: 4, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 4, h: 4}
  ]

const initialState = {
  layout 
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_LAYOUT': {
      const { layout } = action.payload
      localStorage.setItem('layout', JSON.stringify(layout))
      return {
        ...state,
        layout
      }
    }
    case 'ADD_NOTE': {
      const layout = [...state.layout, {
        i: String(Math.random()), x: 0, y: Infinity, w: 4, h: 4
      }]
      localStorage.setItem('layout', JSON.stringify(layout))
      return {
        ...state,
        layout
      }
    }
    default:
      return state
  }
}