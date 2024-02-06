import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '@/configs/configs';
import { useIsMobile } from '@/hooks/isMobile';
import { useWindowSize } from 'react-use';
import {  Cormorant_Garamond } from 'next/font/google';

const cormorant_caramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  style: 'italic',
});
type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const isMobile = useIsMobile();
  const { width } = useWindowSize();

  const Section = styled('section', {
    background: '#EFEBE9',
    overflow: 'hidden',
    position: 'relative',
  });

  const Layout = styled('div', {
    width: '100%',
    padding: isMobile ? '15% 5% 15% 5%' : '5% 10% 5% 10%',
    overflow: 'hidden',
  });

  const Title = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isMobile ? '2.5em' : '3.5em',
    margin: 0,
    fontWeight: '500',
  });

  const SubTitle = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isMobile ? '1.2em' : '2em',
    margin: '24px 0',
    fontWeight: '300',
    lineHeight: 1.8,
  });
  return (
    <Section ref={ref}>
      <Layout>
        <Title className={`${cormorant_caramond.className}`} >Lễ cưới được tổ chức tại</Title>
        <SubTitle className={`${cormorant_caramond.className}`}>
          Trống Đồng Palace - Tầng 3
          <br />
          Địa chỉ: 65 P. Quán Sứ, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội
          <br />
          <br />
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14896.86261203272!2d105.8450071!3d21.0240555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab91141e6c95%3A0xc4f7138ac1434033!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e0!3m2!1svi!2s!4v1707233472970!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              aria-hidden="false"
            />
          </div>
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;
