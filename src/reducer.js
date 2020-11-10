//bugs=[...]
//action = {type:"...",payload:{...}}

let lastId = 0;

export default function reducer(state=[], action){
    if(action.type === 'bugAdded')
    return [...state,//会有深拷贝的问题，使用immer啥的
    {   
        id:++lastId,
        description:action.payload.descripton,
        resolved:false
    }];
    else if(action.type==='bugRemoved')
    return state.filter(bug=>bug.id!==action.payload.id);

    return state;

}