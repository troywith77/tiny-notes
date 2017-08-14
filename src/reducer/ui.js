const initialState = {
  drawerState: {
    left: false
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_DRAWER': {
      return {
        ...state,
        drawerState: action.payload.drawerState
      }
    }
    default:
      return state
  }
}