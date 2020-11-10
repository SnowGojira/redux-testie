import store from "./store";
import * as actions from "./actionType";

const unsubscribe = store.subscribe(()=>{
    console.log("changed!!");
    console.log(store.getState());
})

store.dispatch({
    type:actions.BUG_ADDED,
    payload:{
        description:"bug1"
    }
});

unsubscribe();

store.dispatch({
    type:actions.BUG_REMOVED,
    payload:{
        id:1
    }
})

// console.log(store.getState());
