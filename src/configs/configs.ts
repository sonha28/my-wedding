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
  weddingDate: '25/02/2024',
  weddingLocation: 'Trống đồng Quán sứ',
  groom: {
    fullName: 'Hoàng Anh Sơn',
    name: 'Anh Sơn',
    accountNumber: 'Techcombank ***-***-******',
    fatherName: 'Hoàng Văn Thịnh',
    fatherAccountNumber: 'Techcombank ***-***-******',
    motherName: 'Vũ Thị Minh Trung',
    motherAccountNumber: 'Techcombank ***-***-******',
  },
  bride: {
    fullName: 'Hà Kiều Anh',
    name: 'Kiều Anh',
    accountNumber: 'Techcombank ***-***-******',
    fatherName: 'Hà Bảo Phương',
    fatherAccountNumber: 'Techcombank ***-***-******',
    motherName: 'Nguyễn Thị Vân',
    motherAccountNumber: 'Techcombank ***-***-******',
  },
  titleImage: '/resources/Title.JPG',
  titleImageW: '/resources/Title-w.JPG',
  locationMapImage: '/resources/LocationMap.png',
  galleryImages: [
    '../resources/Gallery_Photo_1.JPG',
    '../resources/Gallery_Photo_2.JPG',
    '../resources/Gallery_Photo_3.JPG',
    '../resources/Gallery_Photo_4.JPG',
    '../resources/Gallery_Photo_5.JPG',
    '../resources/Gallery_Photo_6.JPG',
    '../resources/Gallery_Photo_7.JPG',
    '../resources/Gallery_Photo_8.JPG',
    '../resources/Gallery_Photo_9.JPG',
    '../resources/Gallery_Photo_10.JPG',
    '../resources/Gallery_Photo_11.JPG',
    '../resources/Gallery_Photo_12.JPG',
    '../resources/Gallery_Photo_13.JPG',
    '../resources/Gallery_Photo_14.JPG',
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
  fullName: string;
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
