//song list
let All_song = [
  {
    name: "Jaan Nisaar",
    path: "music/1.mp3",
    img: "images/1.jpg",
    singer: "Arijit Singh"
   },
    {
      name: "Lovely",
      path: "music/2.mp3",
      img: "images/2.png",
      singer: "Billie Eilish & Khalid"
    },
    {
      name: "Exile",
      path: "music/3.mp3",
      img: "images/3.jpg",
      singer: "Taylor Swift & Bon Iver"
     },
    {
      name: "Fursaat",
      path: "music/4.mp3",
      img: "images/4.jpg",
      singer: "Arjun Kanuago"
    },
    {
      name: "Kun Faya Kun",
      path: "music/5.mp3",
      img: "images/5.jpg",
      singer: "A. R. Rahman & Mohit Chauhan"
    },
    {
      name: "Jiya re  || Dahleez",
      path: "music/6.mp3",
      img: "images/6.jpg",
      singer: "TV Show Album"
    },
    {
      name: "Ranjha",
      path: "music/7.mp3",
      img: "images/7.jpg",
      singer: "B Praak & Jasleen Royal"
    },
    {
      name: "Talking To The Moon x Playdate",
      path: "music/8.mp3",
      img: "images/8.jpg",
      singer: "Bruno Mars x Melanie Martinez"
    },
    {
      name: "Runaway",
      path: "music/9.mp3",
      img: "images/9.jpg",
      singer: "Aurora"
    },
    {
      name: "Agar Tum Sath Ho || Tamasha",
      path: "music/10.mp3",
      img: "images/10.jpg",
      singer: "Alka Yagnik & Arijit Sinh"
    },
      {
        name: "Get You The Moon",
        path: "music/11.mp3",
        img: "images/11.png",
        singer: "Kina Ft. Snow"
      },
      {
        name: "Afreen Afreen",
        path: "music/12.mp3",
        img: "images/12.jpg",
        singer: "Rahat Fateh ALi Khan & Momina Mustehsan"
      },
      {
        name: "Carol Of The Bells",
        path: "music/13.mp3",
        img: "images/13.jpg",
        singer: "Lindsey Stirling"
       },  {
        name: "Yeh Jo Halka Halka",
        path: "music/14.mp3",
        img: "images/14.jfif",
        singer: "Nusrat Fateh Ali Khan"
       },
        {
          name: "Meherma",
          path: "music/15.mp3",
          img: "images/15.jpg",
          singer: "Darshan Raval"
        },
        {
          name: "Tuje Kitna Chahne Lage Hum",
          path: "music/16.mp3",
          img: "images/16.jpg",
          singer: "Arijit Singh"
        },
        {
          name: "Tum Ho || Rockstar",
          path: "music/17.mp3",
          img: "images/17.jpg",
          singer: "A R Rahman"
        },
        {
          name: "Ishq Bhi Kiya Re Maula",
          path: "music/18.mp3",
          img: "images/18.jpg",
          singer: "B Praak || Jism 2"
        }
        ,
        {
          name: "Aayaat",
          path: "music/19.mp3",
          img: "images/19.jpg",
          singer: "Arijit Singh & Farhaan Sabri"
        }
        ,
        {
          name: "Ek Dil Ek Jaan",
          path: "music/20.mp3",
          img: "images/20.jpg",
          singer: "Shivam Pathak"
        }
        ,
        {
          name: "Hymn For The Weekend",
          path: "music/21.mp3",
          img: "images/21.jpg",
          singer: "Coldplay"
        }
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
