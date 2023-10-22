const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

function buyIceCream() {
    return {
      type: BUY_ICECREAM,
      info: 'First redux action',
    };
  }

const initialState = {
  numOfCakes: 10,
  numberofIceCreams:20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
      case BUY_ICECREAM:
        return {
          ...state,
          numberofIceCreams: state.numberofIceCreams - 1,
        };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('Initial State ', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('updated State ', store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
