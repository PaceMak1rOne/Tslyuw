import React,{Component} from 'react';
import styles from './HomePages.module.css'
import { Footer, Header, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../commponent'
import { Row, Col, Typography } from 'antd'
import { productList1, productList2, productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { withTranslation , WithTranslation } from 'react-i18next'
class HomePagesComponent extends Component<WithTranslation> {
 render(){
   //在使用props的值前要先进行类型定义
   //需要在i18n里面传入大写的WithTranslation进行对当前的类型定义
   const { t } = this.props
  return (
    <div>
      <Header />
      <div className={styles['pace-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type='warning'>
              {t("home_page.hot_recommended")}
            </Typography.Title>}
          sideImage={sideImage}
          products={productList1}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
             {t("home_page.new_arrival")}
            </Typography.Title>}
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>}
          sideImage={sideImage3}
          products={productList3}
        />
        <BusinessPartners />
      </div>
      <Footer />

    </div>
  )
 }
};
export const HomePage = withTranslation()(HomePagesComponent)