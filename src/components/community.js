// src/components/home.js

import React from 'react';
import Slider from "react-slick";

class Community extends React.Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: 1,
      };
    return(
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>0</h3>
          </div>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Community

// 이와 같은 방식으로 Community, Mypage 컴포넌트도 생성