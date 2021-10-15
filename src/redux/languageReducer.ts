
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
    console.log(state)
    //对当前传过来的action传的值进行判断
    if(action.type === "change_language"){
        //使用对象合并对当前的state进行合并更改
        const newState = {...state,language :action.payload} 
        return newState;
    }
    return state
}