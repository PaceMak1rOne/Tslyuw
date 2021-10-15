import React,{Component} from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import {withRouter,RouteComponentProps } from 'react-router-dom';
import store from '../../redux/store'
import { LanguageState } from '../../redux/language/languageReducer'
import { withTranslation,WithTranslation,Translation } from 'react-i18next'
import { addLanguageActionCreator,changeLanguageActionCreator } from  '../../redux/language/languageActions'
// 创建接口继承LanguageState
interface State extends LanguageState{}
class HeaderComponent extends Component <
  RouteComponentProps & WithTranslation ,
  State 
 > {
//进行获取全局store
  constructor(props:any){
    super(props);
     const storeState = store.getState();
     this.state={
      language : storeState.language,
      languageList:storeState.languageList
     };
     //订阅就是当全局store发生改变时以回调函数的方式进行数据更新
     //  使用subscribe进行订阅store进行数据的推送完成更改
     store.subscribe(this.handleStoreChange);
  } 
  //改变全局store
handleStoreChange = () =>{
  const storetate = store.getState();
  //进行对新语言的增加
       this.setState({
         language:storetate.language, 
         languageList:storetate.languageList
        });
}
  //语言切换
  MenuhandleClick = (e:any) =>{
    //创建一个常量来当做action
     if(e.key  === "new" ){
       //处理添加新语言action
      const action = 
      addLanguageActionCreator("新语言","add_language")
      store.dispatch(action)
     }else{
      const action = 
      changeLanguageActionCreator(e.key)
      store.dispatch(action)
     }
  }
  render(){
    const {history,t} = this.props  
    return (
    <div >
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles['inner']}>
          <Typography.Text>
            {
              t("header.slogan")
            }
          </Typography.Text>
          {/* 下拉菜单 */}
          <Dropdown.Button style={{ marginLeft: 15 }} 
          overlay={
            <Menu onClick={this.MenuhandleClick}>
              {/* 进行循环里吗的语言 */}
              {
                this.state.languageList.map((value)=>{
                  return <Menu.Item key={value.code}>{value.name}</Menu.Item>
                })
              }
              <Menu.Item key = {"new"}>
              {
              t("header.add_new_language")
              }</Menu.Item>
              </Menu>
          }
            icon={<GlobalOutlined />}
          >
            {this.state.language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={()=>history.push("register")}>
              {
                t("header.register")
              }
            </Button>
            <Button onClick={()=>history.push("signIn")}>
              {
                t("header.signin")
              }
            </Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
    <span onClick={()=>history.push("/")}>
    <img src={logo} alt="logo" className={styles['App-logo']} />
        <Typography.Title level={3} className={styles.title}>
          {
            t("header.title")
          }
        </Typography.Title>
    </span>
        <Input.Search
          placeholder={"请输入旅游目的地、主题、关键字"}
          className={styles['search-input']}
        />
      </Layout.Header>
      <Menu mode="horizontal" className={styles['main-menu']}>
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  </div>
)
}
};
export const Header = withTranslation()(withRouter(HeaderComponent));
