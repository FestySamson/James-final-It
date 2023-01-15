const redirect = (e) => {
  // @ts-ignore
  const href = `${window.location?.origin}/student-profile.html`;
  let url = new URL(href);
  // @ts-ignore
  url.searchParams.set('matric', e?.target?.dataset?.matric);
  window.location.replace(url);
};



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
const listView = document.querySelector('.listView');
const listUl = document.createElement('ul');
listOfStudents.forEach((student) => {
  let studentDiv = document.createElement('li');
  let studentImg = document.createElement('img')
  studentDiv.appendChild(studentImg)
  
  studentDiv.innerHTML = `
            <div class="list" data-matric="${student?.matric}" onClick="redirect(event)">
                ${student?.name}
              
                
            </div>
        `;
  listUl.appendChild(studentDiv);
});
listView?.appendChild(listUl);
