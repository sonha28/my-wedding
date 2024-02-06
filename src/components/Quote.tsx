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

const Quote = ({ config }: GreetingProps) => {
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
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: isMobile ? '1.2em' : '2.3em',
    fontWeight: '300',
    lineHeight: 1.8,
  });
  const { width, height } = useWindowSize();

  return (
    <section
      ref={ref}
      style={{
        height: '0%',
        background: '#e5e5e5',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <SubTitle className={` z-50 absolute m-auto left-0 right-0 top-[30%] px-16 ${dancing_Script.className}`}>
        “No matter where you are, or what you’re doing,…it doesn’t matter it doesn’t change it, I
        have and I always will, honestly, truly, completely love you”
      </SubTitle>

      <div className="">
        <Image
          src="/resources/image-quote.JPG"
          alt="heart"
          className="  blur-md"
          width={width}
          height={42}
        />
      </div>
    </section>
  );
};

export default Quote;
