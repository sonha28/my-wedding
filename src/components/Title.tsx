'use client';
import { ConfigsType } from '@/configs/configs';
import { styled } from '@stitches/react';
import Image from 'next/image';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

type TitleProps = {
  config: ConfigsType;
};
import { Dancing_Script } from 'next/font/google';
import { useIsMobile } from '@/hooks/isMobile';

const dancing_Script = Dancing_Script({
  weight: '400',
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
  });

  const SubTitleLayout = styled('p', {
    width: '100%',
    fontSize: isMobile ? '1.2em' : '2em',
    textAlign: 'center',
    margin: '24px 0',
    fontWeight: '300',
  });

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={50}
        gravity={0.05}
        colors={['#FFCDD2', '#F8BBD0', '#D1C4E9']}
        recycle={true}
        style={{ position: 'fixed' }}
      />
      <Section>
        <Layout>
          <SubTitleLayout>WEDDING INVITATION</SubTitleLayout>
          <div className={`flex flex-col justify-center items-center`}>
            <div className={`flex flex-row text-left ${isMobile ? ' pr-6' : ' pr-80'}`}>
              <TitleLayout
                className={` ${isMobile ? 'text-[50px]' : 'text-[90px]'} ${
                  dancing_Script.className
                }`}
              >
                {config.groom.name}
              </TitleLayout>
            </div>
            <div className={`flex flex-row text-left ${isMobile ? ' pl-6' : 'pl-96'}`}>
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
                isMobile ? ' bottom-38' : ' bottom-56'
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

          <SubTitleLayout>
            {config.weddingDate}
            <br />
            {config.weddingLocation}
          </SubTitleLayout>
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
