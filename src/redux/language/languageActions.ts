export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add+language";

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: "en" | "zh";
}
interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: { name: string; code: string };
}
//导出混合类型
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

export const changeLanguageActionCreator = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};
 
export const addLanguageActionCreator = (
  name: string,
  code: string
): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  };
};
