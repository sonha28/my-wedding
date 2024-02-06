import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '@/configs/configs';
import { useIsMobile } from '@/hooks/isMobile';

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');
  const isMobile = useIsMobile();

  const Layout = styled('div', {
    width: '100%',
    padding: isMobile ? '30% 0% 15% 5%' : '5% 0% 5% 10%',
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
    <section
      ref={ref}
      style={{
        height: '100%',
        background:  '#e5e5e5',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>Titile Titile</Title>
        <SubTitle>
          Cô dâu {config.bride.name}
          <br />
          Chú rể {config.groom.name}
          <br />
          <br />
          관심사도, 가치관도 달랐던 두 사람
          <br />
          사랑으로 닮은 꼴이 되어
          <br />
          인생이라는 여행을 함께 떠나려 합니다.
          <br />
          <br />
          따뜻한 격려와 축복으로
          <br />
          힘찬 출발의 자리를 빛내주시기 바랍니다.
          <br />
          <br />
          {config.groom.fullName} con trai của {config.groom.fatherName} · {config.groom.motherName}
          <br />
          {config.bride.fullName} con gái của {config.bride.fatherName} · {config.bride.motherName}
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Greeting;
