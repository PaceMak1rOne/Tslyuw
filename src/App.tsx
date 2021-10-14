import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';
import{ Footer , Header , SideMenu,Carousel,ProductCollection,BusinessPartners } from './commponent'
import {Row,Col,Typography} from 'antd'
import { productList1,productList2,productList3 } from './mockups'
import sideImage from './assets/images/sider_2019_12-09.png';
import sideImage2 from './assets/images/sider_2019_02-04.png';
import sideImage3 from './assets/images/sider_2019_02-04-2.png';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles['pace-content']}>
      <Row style={{marginTop:20}}>
          <Col span={6}>
            <SideMenu/>
          </Col>
          <Col span={18}>
            <Carousel/>
          </Col>
      </Row>
       <ProductCollection
       title={
        <Typography.Title level={3} type="wrning">
          爆款推荐
          </Typography.Title>}
       sideImage={sideImage}
       products={productList1}
       />
           <ProductCollection
       title={
        <Typography.Title level={3} type="danger">
          新品上市
          </Typography.Title>}
       sideImage={sideImage2}
       products={productList2}
       />
             <ProductCollection
       title={
        <Typography.Title level={3} type="success">
        国内旅游推荐
          </Typography.Title>}
       sideImage={sideImage3}
       products={productList3}
       />
       <BusinessPartners/>
       </div> 
      <Footer />
      
    </div>
  );
}

export default App;
