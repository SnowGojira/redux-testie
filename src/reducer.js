import * as actions from "./actionType";

let lastId = 0;

export default function reducer(state=[], action){
    if(action.type === actions.BUG_ADDED)
    return [...state,//会有深拷贝的问题，使用immer啥的
    {   
        id:++lastId,
        description:action.payload.description,
        resolved:false
    }];
    else if(action.type=== actions.BUG_REMOVED)
    return state.filter(bug=>bug.id!==action.payload.id);

    else if(action.type === actions.BUG_RESOLVED){
        return state.map(bug=>
            bug.id!==action.payload.id?
                     bug:{...bug,resolved:true});
    }


    return state;

}