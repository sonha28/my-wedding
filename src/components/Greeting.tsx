import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '@/configs/configs';
import { useIsMobile } from '@/hooks/isMobile';
import Image from 'next/image';
import { Dancing_Script, Cormorant_Garamond } from 'next/font/google';
import { useWindowSize } from 'react-use';

const dancing_Script = Dancing_Script({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
});

const cormorant_caramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  style: 'italic',
});
type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');
  const isMobile = useIsMobile();

  const Layout = styled('div', {
    width: '100%',
    padding: isMobile ? '15% 5% 15% 5%' : '5% 10% 5% 10%',
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
    textAlign: 'center',
    fontSize: isMobile ? '1.2em' : '2em',
    fontWeight: '300',
    lineHeight: 1.8,
  });

  const Groom = () => {
    const { width } = useWindowSize();
    return (
      <div className={`flex flex-col gap-4 items-center`}>
        <div className="p-4 rounded-3xl w-full">
          <div className="w-full h-[250px] overflow-hidden rounded-3xl">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-xl"
              src="/resources/groom.JPG"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full">
            <SubTitle className={` pt-10 text-6xl ${dancing_Script.className}`}>
              Hoàng Anh Sơn
            </SubTitle>
            <Image
              width={width * 0.8}
              height="0"
              src="/resources/underline.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      style={{
        height: '100%',
        background: '#e5e5e5',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout className=" flex flex-col items-center">
        <Title className={` pt-10 text-6xl ${dancing_Script.className}`}>Cô Dâu & Chú Rể</Title>

        <div className=" flex flex-row gap-6">
          <Groom />
          <Groom />
        </div>
      </Layout>
    </section>
  );
};

export default Greeting;
