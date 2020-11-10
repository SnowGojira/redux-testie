import store from "./store";
import {bugAdded,bugRemoved,bugResolved} from "./actions";

const unsubscribe = store.subscribe(()=>{
    console.log("changed!!");
    console.log(store.getState());
})

store.dispatch(bugAdded('bug1'));
store.dispatch(bugAdded('bug2'));
store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch(bugRemoved(1))

// console.log(store.getState());
