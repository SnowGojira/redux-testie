import * as actions from "./actionType";

let lastId = 0;
const defaultState = [];

export default function reducer(state=defaultState, action){
    switch(action.type){
    //如果添加bug的动作发生，那么在state里面添加一条日志
    case actions.BUG_ADDED:
    
    return [...state,
    {   
        id:++lastId,
        description:action.payload.description,
        resolved:false
    }];
    //如果移除bug的动作发生，那么筛掉移除bug的那条日志
    case actions.BUG_REMOVED:
    return state.filter(bug=>bug.id!==action.payload.id);
    //如果解决bug的动作放生，那么把bug的状态标记为“已解决”
    case actions.BUG_RESOLVED:
        return state.map(bug=>
            bug.id!==action.payload.id?
                     bug:{...bug,resolved:true});
    //不做任何动作返回state
    default: state;
 }
}