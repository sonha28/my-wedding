import React from 'react';
import { Divider } from 'antd';
import GroovePaper from '../../public/resources/GroovePaper.png';
import { styled } from '@stitches/react';
import ReactImageGallery from 'react-image-gallery';
import Configs from '@/configs/configs';

const Wrapper = styled('div', {
  background: '#efebe9',
  backgroundImage: `URL(${GroovePaper})`,
  padding: '42px',
  width: '100%',
  // height: '100%',
});

// const Title = styled('p',{
//   // fontSize: 2vh,
//   fontWeight: 'bold',
//   opacity: '0.85',
//   margin-bottom: '0',
// });

const images = Configs.galleryImages.map((item: any) => ({
  original: item,
  thumbnail: item,
}));

const GallerySlide = () => {
  return (
    <div className={`w-full p-11 bg-[#efebe9] bg-[url('/resources/GroovePaper.png')]`}>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        {/* <p className=" text-6xl ">Gallery 1</p> */}
      </Divider>
      <ReactImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
    </div>
  );
};

export default GallerySlide;
