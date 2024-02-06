'use client';
import { ConfigsType } from '@/configs/configs';
import { styled } from '@stitches/react';
import Image from 'next/image';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

type TitleProps = {
  config: ConfigsType;
};
import { useIsMobile } from '@/hooks/isMobile';
import { Dancing_Script, Cormorant_Garamond } from 'next/font/google';
import { Divider } from 'antd';

const dancing_Script = Dancing_Script({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
});

const cormorant_caramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  style: 'italic',
});
const Title = ({ config }: TitleProps) => {
  const { width, height } = useWindowSize();
  const isMobile = useIsMobile();

  // const calWidth = isMobile ? width : width;

  const Section = styled('section', {
    height: '100%',
    background: '#fbfaf7',
    overflow: 'hidden',
    position: 'relative',
  });

  const Layout = styled('div', {
    width: '100%',
    color: '#5D4037',
    marginTop: '3.5%',
    animation: 'fadein 2.5s',
    position: 'absolute',
    justifyItems: 'center',
    alignItems: 'center',
    zIndex: 1,
  });

  const TitleLayout = styled('p', {
    width: '100%',
    // fontSize: isMobile ? '2.5em' : '3.5em',
    margin: 0,
    textShadow: isMobile ? '2px 2px 4px rgba(93 64 55 / 35%)' : '2px 2px 4px rgba(93 64 55 / 55%)',
  });

  const SubTitleLayout = styled('p', {
    width: '100%',
    textAlign: 'center',
    // margin: '8px 0',
    fontWeight: '300',
    textShadow: isMobile ? '2px 2px 4px rgba(93 64 55 / 35%)' : '1px 1px 3px rgba(93 64 55 / 55%)',
  });

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={50}
        gravity={0.01}
        colors={['#FFCDD2', '#D1C4E9', '#74c7e8', '#f47a8b']}
        recycle={true}
        style={{ position: 'fixed' }}
      />
      <Section>
        <Layout>
          <SubTitleLayout
            className={`${cormorant_caramond.className} pt-6 drop-shadow-lg ${
              isMobile ? ' text-3xl' : 'text-5xl'
            }`}
          >
            Save the date
          </SubTitleLayout>
          <SubTitleLayout
            className={`${cormorant_caramond.className}  ${isMobile ? ' text-xl' : 'text-2xl'}`}
          >
            {config.weddingDate}
          </SubTitleLayout>
          <div className={`flex flex-col justify-center items-center`}>
            <div className={`flex flex-row text-left ${isMobile ? ' pr-36' : ' pr-80'}`}>
              <TitleLayout
                className={` ${isMobile ? 'text-[50px]' : 'text-[90px]'} ${
                  dancing_Script.className
                }`}
              >
                {config.groom.name}
              </TitleLayout>
            </div>
            <div className={`flex flex-row text-left ${isMobile ? ' pl-36' : 'pl-96'}`}>
              <TitleLayout
                className={` ${isMobile ? 'text-[50px]' : 'text-[90px]'} ${
                  dancing_Script.className
                }`}
              >
                {config.bride.name}
              </TitleLayout>
            </div>
            <div
              className={`flex flex-row left-1/2 ${
                isMobile ? ' bottom-[56px]' : ' bottom-[84px]'
              } absolute`}
            >
              <TitleLayout
                className={`${isMobile ? 'text-[30px]' : 'text-[70px]'} ${
                  dancing_Script.className
                }`}
              >
                &amp;
              </TitleLayout>
            </div>
          </div>
          <Divider />{' '}
        </Layout>
        <div className=" w-screen h-screen">
          <Image
            className={`${isMobile ? 'pt-16' : ''}`}
            width={width}
            height={height}
            src={isMobile ? config.titleImage : config.titleImageW}
            alt="Wedding Invitation Title Picutre"
            objectPosition="center top"
          />
        </div>
      </Section>
    </>
  );
};

export default Title;
