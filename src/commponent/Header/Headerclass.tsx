import React,{Component} from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import {withRouter,RouteComponentProps } from 'react-router-dom';
import store from '../../redux/store'
import { LanguageState } from '../../redux/languageReducer'
// 创建接口继承LanguageState
interface State extends LanguageState{}
class HeaderComponent extends Component<RouteComponentProps,State> {
//进行获取全局store
  constructor(props:any){
    super(props);
     const storeState = store.getState();
     this.state={
      language : storeState.language,
      languageList:storeState.languageList
     }
  }
  //语言切换
  MenuhandleClick = (e:any) =>{
    //创建一个常量来当做action
    const action = {
      type:"change_language",
      payload:e.key
    }
    store.dispatch(action)
  }
  render(){
    const {history} = this.props  
    return (
    <div>
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles['inner']}>
          <Typography.Text>
            让旅游更幸福
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
              
            </Menu>
          }
            icon={<GlobalOutlined />}
          >
            {this.state.language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={()=>history.push("register")}>注册</Button>
            <Button onClick={()=>history.push("signIn")}>登录</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
    <span onClick={()=>history.push("/")}>
    <img src={logo} alt="logo" className={styles['App-logo']} />
        <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
    </span>
        <Input.Search
          placeholder={"请输入旅游目的地、主题、关键字"}
          className={styles['search-input']}
        />
      </Layout.Header>
      <Menu mode="horizontal" className={styles['main-menu']}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu>
    </div>
  </div>
)
}
};
export const Header = withRouter(HeaderComponent)
