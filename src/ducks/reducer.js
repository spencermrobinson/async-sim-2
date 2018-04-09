import axios from 'axios';

const initialState = {
    user: null,
    listings:[],
    property: {
        name: null,
        description: null,
        address: null,
        city: null,
        State: null,
        zip: null,
        image: null,
        loan: null,
        mortgage: null,
        rent: null,
        recommended_rent: null
    }
};

const UPDATE_PROPERTY = "UPDATE_PROPERTY";
const RESET_PROPERTY = "RESET_PROPERTY";
const DELETE_PROPERTY = "DELETE_PROPERTY";

export default ( state = initialState, action ) => {
    const { payload } = action;
  
    switch( action.type ) {
      
  
      case UPDATE_PROPERTY: {
        let newState = Object.assign({}, state);
        for( var i in payload ) {
          newState.property[i] = payload[i];
          console.log(newState)
        }
        return newState;
        
        
      }

      case DELETE_PROPERTY + 'FULFILLED':
        return Object.assign( {}, state, {properties: payload});
  
      case RESET_PROPERTY: {
        let newState = Object.assign({}, state);
        for( var j in newState.property ) {
          newState.property[j] = null;
        }
        return newState
        
      }
      
      default: return state;
    }
  }
  export function updateProperty( obj ) {
    return {
      type: UPDATE_PROPERTY,
      payload: obj
    }
    
  }
  export function resetProperty() {
    return {
      type: RESET_PROPERTY,
      payload: null
    }
  }

  export function deleteProperty(id){
    console.log('reducer id:', id)
    const promise = axios.delete(`/api/deleteProperty/${ id }`).then( resp => {resp.data, console.log('reducer hit')});
    return{
      type: DELETE_PROPERTY,
      payload: promise
    };
  }
  