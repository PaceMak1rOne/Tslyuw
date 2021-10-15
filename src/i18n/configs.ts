import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//创建语言的文件包进行对语言的存储

import translation_en from './en.json'
import translation_zh from './zh.json'

const resources = {  
    en: {    
        translation:translation_en
     },  
fr: {   
     translation: translation_zh
    }
};
i18n  
.use(initReactI18next)   //指的是i18n的框架
.init({    
    resources,   //用来进行更改的文件
     lng: "zh",  //初始化的语言

    interpolation: {     
         escapeValue: false //用来防止xss攻击因为react有防止攻击的所以false
      }
      });  

export default i18n;