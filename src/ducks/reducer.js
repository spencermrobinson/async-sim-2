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
const GET_PROPERTIES = "GET_PROPERTIES";
const DELETE_PROPERTY = "DELETE_PROPERTY";

export default ( state = initialState, action ) => {
    const { payload } = action;
    console.log(action)
  
    switch( action.type ) {
      
  
      case UPDATE_PROPERTY: {
        let newState = Object.assign({}, state);
        for( var i in payload ) {
          newState.property[i] = payload[i];
          console.log(newState)
        }
        return newState;
        
        
      }

      case GET_PROPERTIES + '_FULFILLED':
      return Object.assign( {}, state, { listings: payload });

      case GET_PROPERTIES + '_REJECTED':
      return Object.assign( {}, initialState);

      case DELETE_PROPERTY + '_FULFILLED':
        return Object.assign( {}, state, {listings: payload});


  
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
  export function getProperties( history ){
    const promise = axios.get(`/api/getProperties`).then( resp => resp.data)
    .catch( () => history.push('/'));

    return {
      type: GET_PROPERTIES,
      payload: promise
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
    const promise = axios.delete(`/api/deleteProperty/${ id }`).then( resp => resp.data);
    return{
      type: DELETE_PROPERTY,
      payload: promise
    };
  }
  