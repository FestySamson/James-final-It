// query params on route
const params = new URLSearchParams(window.location.search);

if (params.has('matric')) {
  const matric = params.get('matric');
  // @ts-ignore
  const listOfStudents = [
    {
      matric: 'cos/3387/2017',
      name: 'James Ikhimoiya',
      imgUrl: '../images/me.jpeg',
      level: '400 Level',
    },
    {
      matric: 'cos/3381/2017',
      name: 'Samson Festy',
      imgUrl: '../images/fes.jpg',
      level: '400 Level',
    },
    {
      matric: 'cos/3376/2017',
      name: 'Ezechukwu Celestine',
      imgUrl: './images/cele.jpg',
      level: '400 Level',
    },
    {
      matric: 'cos/3384/2017',
      name: 'Tomiwa Henry',
      imgUrl: './images/Hot.jpg',
      level: '400 Level',
    },
    {
      matric: 'cos/3367/2017',
      name: 'David Ebamije',
      imgUrl: './images/dave.jpg',
      level: '400 Level',
    },
    {
      matric: 'cos/3876/2017',
      name: 'Edherue Great',
      imgUrl: './images/great.jpg',
      level: '400 Level',
    },
    {
      matric: 'cos/4673/2018',
      name: 'osemeke Favour',
      imgUrl: './images/fav.jpg',
      level: '400 Level',
    },
    {
      matric: 'cos/3364/2017',
      name: 'Oshodi Samuel',
      imgUrl: './images/oshodi.jpg',
      level: '400 Level',
    },
    {
      matric: 'cos/3349/2017',
      name: 'Ogbodo Tobore',
      imgUrl: './images/tb.jpg',
      level: '400 Level',
    }
  ];
  const getStudent = listOfStudents.find((v) => v.matric === matric);
  document.querySelector('#name-display').innerHTML = getStudent?.name;
  document.querySelector( '#matric-display' ).innerHTML = getStudent?.matric;
  document.querySelector('#level-display').innerHTML = getStudent?.level;
  document.querySelector('.img').innerHTML = `<img src="${getStudent?.imgUrl}" alt="${getStudent?.matric}">`;
  const generatedUrl = `${window.location?.origin}/student-profile.html?matric=${getStudent?.matric}`;
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    width: 250,
    height: 250,
  });
  qrcode.makeCode(generatedUrl);
} else {
  alert('looks like you route wrongly');
  window.location.replace('index.html');
}


