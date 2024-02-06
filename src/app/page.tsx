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
import GreetingThank from '@/components/Greeting-thank';
import { Dancing_Script } from 'next/font/google';
import { styled } from '@stitches/react';
import { useIsMobile } from '@/hooks/isMobile';
import { useWindowSize } from 'react-use';
import { Button, Modal } from 'antd';
import { useState } from 'react';

const dancing_Script = Dancing_Script({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
});
export default function Home() {
  const isMobile = useIsMobile();
  const SubTitle = styled('p', {
    color: '#795548',
    width: '100%',
    textAlign: 'center',
    fontSize: isMobile ? '1.2em' : '2em',
    margin: '24px 0',
    fontWeight: '300',
    lineHeight: 1.8,
  });
  const { width, height } = useWindowSize();


  const TitleModal = styled('h2', { fontSize: isMobile ? '2em' : '3.5em', color: '#FFF' });

  const SubTitleModal = styled('div', {
    margin: '15px 0',
    fontSize: isMobile ? '1em' : '2em',
    fontWeight: 600,
    color: '#EEEEEE',
  });
  return (
    <main style={{ height: '100%' }} className=" bg-white">
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <TitleLayout config={Configs} />
      <GreetingThank config={Configs} />
      <Greeting config={Configs} />
      <GallerySlide />
      {/* <Gallery config={Configs} /> */}
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <div
        style={{
          background: '#EFEBE9',
          // opacity: 0.6,
          textAlign: 'center',
        }}
        className="py-8"
      >
        <SubTitle className="flex flex-row items-center justify-center gap-4">
          <span className={` text-3xl ${dancing_Script.className}`}>{Configs.groom.name}</span>
          <Image src="/resources/heart.png" alt="heart" width={25} height={42} />
          <span className={` text-3xl ${dancing_Script.className}`}>{Configs.bride.name}</span>
        </SubTitle>
      </div>
    </main>
  );
}
