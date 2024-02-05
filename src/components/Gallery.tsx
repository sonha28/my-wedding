import { styled } from '@stitches/react';
import { Col, Image, Row } from 'antd';
import useOnScreen from '../hooks/useOnScreen';

import { useWindowSize } from 'react-use';
import { ConfigsType } from '@/configs/configs';
import { useRef } from 'react';
import { useIsMobile } from '@/hooks/isMobile';

type GalleryProps = {
  config: ConfigsType;
};

const Gallery = ({ config }: GalleryProps) => {
  const { width } = useWindowSize();

  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');
  const isMobile = useIsMobile();

  const Layout = styled('div', {
    width: '100%',
    padding: isMobile ? '30% 0% 15% 5%' : '5% 0% 5% 10%',
  });

  const Title = styled('p', {
    color: '#FFFFFF',
    width: '100%',
    fontSize: isMobile ? '2.5em' : '3.5em',
    margin: 0,
    fontWeight: '500',
  });

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        background: onScreen ? '#212121' : '#EFEBE9',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>우리의 아름다운 순간</Title>
      </Layout>
      <Row gutter={[16, 16]}>
        {config.galleryImages.map((image, index) => (
          <Col key={index} span={isMobile ? 6 : 3}>
            <Image width={isMobile ? width / 4 - 10 : width / 8 - 10} src={image} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Gallery;
