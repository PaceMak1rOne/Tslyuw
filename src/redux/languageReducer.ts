
interface LanguageState{
    language:"en"|"zh",
    languageList:{name:string,code:string}[]
}

//初始化store的state
const defaultState: LanguageState ={
    language:"zh",
    languageList:[
        {name:"中文",code:"zh"},
        {name:"英文",code:"en"}
    ]
}

export default (state = defaultState,action) =>{
    return state
}