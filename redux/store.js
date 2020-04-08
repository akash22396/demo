import{createStore,combineReducers,applyMiddleware} from 'redux'
// import{} from 'react-redux'

const intialState = {
    st:11,
    data:[]
}
const reducer = (state= intialState, {type,payload})=>{
    switch (type) {
        case 'ST':            
            return{
                ...state,
                st: payload
            }
            case 'DT':
                return{
                ...state,
                data:payload
            }
    
        default:
            return state
    }
}



const store = createStore(reducer);

export default store;