'use client';
import Image from 'next/image';
import TitleLayout from '@/components/Title';
import Greeting from '@/components/Greeting';
import Gallery from '@/components/Gallery';
import CongratulatoryMoney from '@/components/CongratulatoryMoney';
import Location from '@/components/Location';
import Share from '@/components/Share';
import { Footer } from 'antd/lib/layout/layout';
import Configs from '@/configs/configs';
import GallerySlide from '@/components/Gallery-slide';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Home() {
  return (
    <main style={{ height: '100%' }} className=' bg-white'>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <GallerySlide/>
      <Gallery config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      {/* <Share config={Configs} /> */}
      {/* <Footer
        style={{
          background: '#D7CCC8',
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2021 KyuHyuk Lee
      </Footer> */}
    </main>
  );
}
