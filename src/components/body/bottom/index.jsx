import React, { useRef } from 'react'
import './bodyBottom.css'
import BearCarousel, {
    TBearSlideItemDataList,
    BearSlideItem
  } from "bear-react-carousel";
  import 'bear-react-carousel/dist/index.css';
import Card from '../../card'
import imagemComida from '../../../assets/img/comida_1.svg'

const BodyBottom = () => {

    const images = [
        { id: 1, image: imagemComida },
        { id: 2, image: imagemComida },
        { id: 3, image: imagemComida }
      ];
      const bearSlideItemData = images.map((row) => {
        return {
          key: row.id,
          children:<BearSlideItem>
                <div className="container-card">
                    <img className="img-card" src={row.image}/>
                    <div className="button-group">
                        <div className="text-card">texto</div>
                        <button>See Recipe</button>
                    </div>
                </div>
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
                
                data={bearSlideItemData}
                enableAutoPlay
                autoPlayTime={3000}
                isEnableLoop
                isEnableNavButton
                isEnablePagination
                slidesPerView={2}
                // isDebug
                aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
                />
            </div>
        </div>
    )
}

export default BodyBottom;