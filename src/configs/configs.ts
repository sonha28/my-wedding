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
    '../resources/Gallery_Photo_1.jpg',
    '../resources/Gallery_Photo_2.jpg',
    '../resources/Gallery_Photo_3.jpg',
    '../resources/Gallery_Photo_4.jpg',
    '../resources/Gallery_Photo_5.jpg',
    '../resources/Gallery_Photo_6.jpg',
    '../resources/Gallery_Photo_7.jpg',
    '../resources/Gallery_Photo_8.jpg',
    '../resources/Gallery_Photo_9.jpg',
    '../resources/Gallery_Photo_10.jpg',
    '../resources/Gallery_Photo_11.jpg',
    '../resources/Gallery_Photo_12.jpg',
    '../resources/Gallery_Photo_13.jpg',
    '../resources/Gallery_Photo_14.jpg',
    '../resources/Gallery_Photo_15.jpg',
    '../resources/Gallery_Photo_16.jpg',
    '../resources/Gallery_Photo_17.jpg',
    '../resources/Gallery_Photo_18.jpg',
    '../resources/Gallery_Photo_19.jpg',
    '../resources/Gallery_Photo_20.jpg',
    '../resources/Gallery_Photo_21.jpg',
    '../resources/Gallery_Photo_22.jpg',
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
