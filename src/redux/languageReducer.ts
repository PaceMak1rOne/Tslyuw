
export interface LanguageState{
    language:"en"|"zh",
    languageList:{name:string,code:string}[]
}

//初始化store的state
const defaultState: LanguageState ={
    language:"zh",
    languageList:[
        {name:"中文",code:"zh"},
        {name:"English",code:"en"}
    ]
}

export default (state=defaultState,action:any) =>{
    switch(action.type){
        case "add_language" ://对新的语言进行增加
            return {...state,languageList:[...state.languageList,action.payload]} //对当前语言列表进行添加进行数组合并如何对象合并
        case "change_language"://对当前传过来的action传的值进行判断
            return {...state,language :action.payload}//使用对象合并对当前的state进行合并更改
            default :return state
    }
}
//     console.log(state)
    
//     if(action.type === "change_language"){
        
//         const newState = {...state,language :action.payload} 
//         return newState;
//     }
    
//     if(action.type === "add_language"){
       
//         const newState = {...state,languageList:[...state.languageList,action.payload]}
//         return newState
//     }
//     return state
// }