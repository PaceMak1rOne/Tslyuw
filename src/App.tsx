import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';
import{ Footer , Header , SideMenu,Carousel } from './commponent'
import {Row,Col} from 'antd'

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
      </div>
      <Footer />
    </div>
  );
}

export default App;
