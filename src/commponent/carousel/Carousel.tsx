import React from 'react';
import styles from './Carouse.module.css'
import { Carousel as AntdCarousel,Image } from 'antd';
import carouselImge1 from '../../assets/images/carousel_1.jpg'
import carouselImge2 from '../../assets/images/carousel_2.jpg'
import carouselImge3 from '../../assets/images/carousel_3.jpg'

export const Carousel: React.FC = () => {
  return (
    <div>
     <AntdCarousel autoplay className={styles.slider}>
     <Image src={carouselImge1} />
     <Image src={carouselImge2} />
     <Image src={carouselImge3} />
     </AntdCarousel>
    </div>
  ) 
};