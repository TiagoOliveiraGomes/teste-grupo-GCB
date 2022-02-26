import React, { useState } from 'react'
import './bodyBottom.css'
import ProfileAndName from '../../profileAndName'
import BearCarousel, {BearSlideItem} from "bear-react-carousel";
import 'bear-react-carousel/dist/index.css';
import Card from '../../card'
import useWindowWide from '../../../util/getWindowSize';
import blog1 from '../../../assets/img/blog_image_1.svg'
import blog2 from '../../../assets/img/bloco_image_2.svg'
import blog3 from '../../../assets/img/bloco_image_3.svg'
import blog4 from '../../../assets/img/bloco_image_4.svg'
import profileImg from '../../../assets/img/profile_test.png'


const BodyBottom = () => {
  const getSize905 = useWindowWide(905)
  const getSize510 = useWindowWide(510)

    const images = [
        { id: 1, image: blog1, text: "Quick-start guide to nuts and seeds" },
        { id: 2, image: blog2, text: "Nutrition: Tips for Improving Your Health" },
        { id: 3, image: blog3, text: "The top 10 benefits of eating healthy" },
        { id: 4, image: blog4, text: "What is More Healthy?" },
      ];
      const bearSlideItemData = images.map((row) => {
        return {
          key: row.id,
          children:<BearSlideItem>
                <Card source={row.image} text={row.text} element={<ProfileAndName source={profileImg} text={"ola"} />} />
          </BearSlideItem> 
        };
      });
    return (
        <div className='body-Bottom'>
            {/* <img src="" alt="" /> */}
            <div className='initial-texts'>
                <h1 className='tittle'>Read Our Blog</h1>
                <h3 className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
            </div>
            <div className='test-square'>
                <BearCarousel
                className='carosel'
                data={bearSlideItemData}
                enableAutoPlay
                autoPlayTime={100}
                isEnableLoop
                isEnableNavButton
                isEnablePagination
                slidesPerView={getSize510? 1: getSize905? 2 : 4}
                // isDebug
                aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
                />
            </div>
        </div>
    )
}

export default BodyBottom;