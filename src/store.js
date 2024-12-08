import { combineReducers, createStore } from "redux";

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};



function customerReducer(state=initialStateCustomer, action){
    switch(action.type){
      case 'customer/createCustomer':
        return {...state,
          fullName: action.payload.fullName,
          nationalId: action.payload.nationalId,
          createdAt: action.payload.createdAt,
        };

        case 'customer/updateName':
          return{...state, fullName:action.payload};
          default:
            return state;
    }
}

const rootReducer= combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);


// store.dispatch({type: 'account/deposit', payload:500});
// store.dispatch({type: 'account/withdraw', payload:200});
// console.log(store.getState());

// store.dispatch({type: 'account/requestLoan', payload:{amount:1000, purpose:'Buy a car'},});
// console.log(store.getState());

// store.dispatch({type: 'account/payLoan'});
// console.log(store.getState());



store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a cheap car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName){
  return{type:'account/updateName', payload:fullName}
}

store.dispatch(createCustomer('Faima Ahmed', '223344'));
store.dispatch(deposit(250));
console.log(store.getState())