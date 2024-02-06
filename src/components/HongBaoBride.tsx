import { useIsMobile } from '@/hooks/isMobile';
import { styled } from '@stitches/react';

import { Cormorant_Garamond } from 'next/font/google';

const cormorant_caramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  style: 'italic',
});
type HongBaoProps = {
  title: string;
  subTitle: string;
  onClick?: () => void;
};

const HongBaoBride = ({ title, subTitle, onClick }: HongBaoProps) => {
  const isMobile = useIsMobile();

  const Layout = styled('div', {
    textAlign: 'center',
    width: '100%',
    padding: '15px 10%',
    display: 'inline-block',
  });

  const Envelope = styled('div', {
    background: '#f56b7e',
    width: '100%',
    borderRadius: '10px',
    margin: '0 auto',
    padding: '0px 0px 40% 0px',
  });

  const Cover = styled('div', {
    padding: '20% 0',
    border: '1px solid #f47a8b',
    backgroundColor: '#f47a8b',
    borderRadius: '10px 10px 50% 50% / 10px 10px 15% 15%',
    boxShadow: '0px 4px 0px -1px rgba(0,0,0,0.2)',
  });

  const Sticker = styled('div', {
    width: isMobile ? '2.2em' : '6em',
    height: isMobile ? '2.2em' : '6em',
    border: '1px solid #FFA73A',
    backgroundColor: '#FFA73A',
    borderRadius: '50%',
    color: '#FFF',
    display: 'inline-block',
    boxShadow: '0px 4px 0px 0px rgba(0, 0, 0, 0.2)',
    marginTop: '-3em',
  });

  const Title = styled('h2', { fontSize: isMobile ? '2em' : '3.5em', color: '#FFF' });

  const SubTitle = styled('div', {
    margin: '15px 0',
    fontSize: isMobile ? '1em' : '2em',
    fontWeight: 600,
    color: '#EEEEEE',
  });
  return (
    <Layout onClick={onClick}>
      <Envelope>
        <Cover>
          <Title className={`${cormorant_caramond.className}`}>{title}</Title>
          <SubTitle className={`${cormorant_caramond.className}`}>{subTitle}</SubTitle>
        </Cover>
        <Sticker />
      </Envelope>
    </Layout>
  );
};

export default HongBaoBride;
