// import TitleImage from '../../public/resources/Title.JPG';
// import LocationMapImage from '/resources/LocationMap.png';
// import GalleryPhoto1 from '../resources/Gallery_Photo_1.JPG';
// import GalleryPhoto2 from '../resources/Gallery_Photo_2.JPG';
// import GalleryPhoto3 from '../resources/Gallery_Photo_3.JPG';
// import GalleryPhoto4 from '../resources/Gallery_Photo_4.JPG';
// import GalleryPhoto5 from '../resources/Gallery_Photo_5.JPG';
// import GalleryPhoto6 from '../resources/Gallery_Photo_6.JPG';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!',
  weddingDate: '1970년 01월 01일, 목요일 오전 12시 00분',
  weddingLocation: '○○○웨딩, ○층 ○○홀',
  groom: {
    name: 'Sơn Hoàng',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: 'Kiều Anh',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: '/resources/Title.JPG',
  titleImageW: '/resources/Title-w.JPG',
  locationMapImage: '/resources/LocationMap.png',
  galleryImages: [
    // '../resources/Gallery_Photo_1.JPG',
    // '../resources/Gallery_Photo_2.JPG',
    // '../resources/Gallery_Photo_3.JPG',
    // '../resources/Gallery_Photo_4.JPG',
    // '../resources/Gallery_Photo_5.JPG',
    // '../resources/Gallery_Photo_6.JPG',
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: any;
  titleImageW: any;
  locationMapImage: any;
  galleryImages: any[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
