import React from 'react';
import {Row,Col,Typography,Divider} from 'antd';
import styles from './BusinessPartners.module.css'
import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image4 from '../../assets/images/facebook-807588_640.png';
const compt = [
  {src:image1,title:"微软"},
  {src:image2,title:"油管"},
  {src:image3,title:"Ins"},
  {src:image4,title:"脸书"}
]
export const BusinessPartners: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
     <Row>
     {
       compt.map((value,index)=>{
        return (
          <Col span={6} key={index}>
          <img src={value.src}
              style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
          />
         </Col>
        )
       })
     }
     </Row>
    </div>
  )
};