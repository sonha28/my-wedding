import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '@/configs/configs';
import { useIsMobile } from '@/hooks/isMobile';
import { Divider } from 'antd';

type GreetingProps = {
  config: ConfigsType;
};
import Image from 'next/image';
import { Dancing_Script, Cormorant_Garamond } from 'next/font/google';

const dancing_Script = Dancing_Script({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
});

const cormorant_caramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  style: 'italic',
});
const GreetingThank = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');
  const isMobile = useIsMobile();

  const Layout = styled('div', {
    width: '100%',
    padding: isMobile ? '15% 5% 15% 5%' : '5% 12% 5% 12%',
  });

  const Title = styled('p', {
    color: '#795548',
    width: '100%',
    textAlign: 'center',
    fontSize: isMobile ? '2.5em' : '3.5em',
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

  return (
    <section
      ref={ref}
      style={{
        height: '100%',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout className="flex flex-col items-center justify-center">
        <Image src="/resources/intro-title-flower1.png" alt="heart" width={200} height={42} />
        <Title className={` pt-10 text-6xl ${dancing_Script.className}`}>Lời Ngỏ</Title>
        <Divider plain className="py-4" />
        <SubTitle className={`${cormorant_caramond.className} py-8 ${isMobile ? 'px-4' : ' px-14'}`}>
          Cảm ơn tất cả những người bạn thân yêu của tôi! Tôi biết các bạn rất bận rộn, bận rộn với
          công việc, bận rộn với công việc gia đình… Nhưng tất cả đã có mặt hôm nay để chúc mừng
          tinh yêu và hạnh phúc của chúng tôi.Một lần nữa chân thành cảm ơn tất cả các bạn!
        </SubTitle>
        <SubTitle className="flex flex-row items-center justify-center gap-4">
          <span className={` text-3xl ${dancing_Script.className}`}>{config.groom.name}</span>
          <Image src="/resources/heart.png" alt="heart" width={25} height={42} />
          <span className={` text-3xl ${dancing_Script.className}`}>{config.bride.name}</span>
        </SubTitle>
      </Layout>
    </section>
  );
};

export default GreetingThank;
