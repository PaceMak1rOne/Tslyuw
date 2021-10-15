
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
    return state
}