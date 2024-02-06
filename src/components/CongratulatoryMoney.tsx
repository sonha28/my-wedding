'use client';
import { styled } from '@stitches/react';
import { Button, message } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import HongBao from './HongBao';
import { ConfigsType } from '@/configs/configs';
import Modal from './Modal';
import { useIsMobile } from '@/hooks/isMobile';
import Image from 'next/image';
import { useWindowSize } from 'react-use';
import { Cormorant_Garamond } from 'next/font/google';
import HongBaoBride from './HongBaoBride';

const cormorant_caramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  style: 'italic',
});
type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const isMobile = useIsMobile();

  const Section = styled('section', {
    background: '#EFEBE9',
    overflow: 'hidden',
    position: 'relative',
  });

  const Layout = styled('div', {
    width: '100%',
    padding: isMobile ? '5%' : '5% 10% 5% 10%',
  });

  const Title = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isMobile ? '2.5em' : '3.5em',
    textAlign: 'center',
    margin: 0,
    fontWeight: '500',
  });

  const SubTitle = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isMobile ? '1em' : '1.8em',
    textAlign: 'center',
    margin: '4px 0',
    fontWeight: '300',
    lineHeight: 1.8,
  });

  // const GridLayout = styled('div', {
  //   display: 'grid',
  //   gridTemplateColumns: '50% 50%',
  // });

  const Description = styled('p', {
    fontSize: '1em',
    lineHeight: 1.75,
    opacity: 0.65,
    marginTop: '8px',
  });

  const { width, height } = useWindowSize();
  const widthCal = isMobile ? width * 0.6 : width * 0.4;
  const heightCal = isMobile ? height * 0.6 : height * 0.4;
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);
  return (
    <>
      <div className=" overflow-hidden py-6 bg-slate-100">
        <Layout className="w-full flex flex-col items-center">
          <Image
            className="py-4"
            src="/resources/lucky-money.png"
            alt="heart"
            width={widthCal}
            height={42}
          />
          <Title className={`${cormorant_caramond.className}`}>
            Gửi lời chúc đến đôi uyên ương
          </Title>
          {/* <SubTitle className={`${cormorant_caramond.className}`}>
          축하의 마음을 담아 축의금을 전달해 보세요.
        </SubTitle> */}
        </Layout>
        <div className="flex flex-row">
          <HongBao
            title="Nhà Trai"
            subTitle="Hoàng Anh Sơn"
            onClick={() => {
              setGroomVisible(true);
            }}
          />

          <HongBaoBride
            title="Nhà Gái"
            subTitle="Hà Kiều Anh"
            onClick={() => setBrideVisible(true)}
          />
        </div>
      </div>
      <Modal open={groomVisible} className="p-4 flex flex-col items-center">
        <Image
          width={widthCal}
          height={heightCal}
          src="/resources/sonha.JPG"
          alt="Wedding Invitation Title Picutre"
          objectPosition="center top"
        />
        <Title className={`${cormorant_caramond.className}`}>Nhà Trai</Title>
        <SubTitle className={`${cormorant_caramond.className}`}>Hoàng Anh Sơn</SubTitle>
        <SubTitle className={`${cormorant_caramond.className}`}>
          Techcombank - 1902 73400 44017
        </SubTitle>
        <Button
          type="primary"
          onClick={() => setGroomVisible(false)}
          className={` w-1/2 h-8 rounded-md bg-cyan-500 disabled:bg-neutral-400 hover:bg-cyan-900 focus:bg-cyan-700 ${cormorant_caramond.className}`}
        >
          Đóng
        </Button>
      </Modal>
      <Modal open={brideVisible} className="p-4 flex flex-col items-center">
        <Image
          className="p-2"
          width={widthCal}
          height={heightCal}
          src="/resources/sonha.JPG"
          alt="Wedding Invitation Title Picutre"
          objectPosition="center top"
          onClick={() => setBrideVisible(false)}
        />
        <Title className={`${cormorant_caramond.className}`}>Nhà Gái</Title>
        <SubTitle className={`${cormorant_caramond.className}`}>Hà Kiều Anh</SubTitle>
        <SubTitle className={`${cormorant_caramond.className}`}>
          Techcombank - 1902 73400 44017
        </SubTitle>
        <Button
          type="primary"
          onClick={() => setBrideVisible(false)}
          className={` w-1/2 h-8 rounded-md bg-pink-500 disabled:bg-neutral-400 hover:bg-pink-900 focus:bg-pink-700 ${cormorant_caramond.className}`}
        >
          Đóng
        </Button>
      </Modal>
    </>
  );
};

export default CongratulatoryMoney;
