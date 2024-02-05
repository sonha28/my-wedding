'use client';
import { styled } from '@stitches/react';
import { Button, Divider, message } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import HongBao from './HongBao';
import { ConfigsType } from '@/configs/configs';
import Modal from './Modal';

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;

  const Section = styled('section', {
    background: '#EFEBE9',
    overflow: 'hidden',
    position: 'relative',
  });

  const Layout = styled('div', {
    width: '100%',
    padding: isPortrait ? '10% 0% 10% 5%' : '5% 0% 5% 10%',
  });

  const Title = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isPortrait ? '2.5em' : '3.5em',
    margin: 0,
    fontWeight: '500',
  });

  const SubTitle = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isPortrait ? '1.2em' : '2em',
    margin: '24px 0',
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
  return (
    <div className=" overflow-hidden relative bg-slate-100">
      <Layout>
        <Title>축하의 마음을 전하세요</Title>
        <SubTitle>축하의 마음을 담아 축의금을 전달해 보세요.</SubTitle>
      </Layout>
      <div className="flex flex-row">
        <HongBao
          title="신랑측"
          subTitle="계좌번호 확인"
          onClick={() => {
            setGroomVisible(true);
          }}
        />

        <HongBao title="신부측" subTitle="계좌번호 확인" onClick={() => setBrideVisible(true)} />
      </div>
      <Modal open={groomVisible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>

        <p>1111111</p>
        <Button onClick={() => setGroomVisible(false)}>close </Button>
      </Modal>
    </div>
  );
};

export default CongratulatoryMoney;
