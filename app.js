let prev = document.getElementById('prev');
let next = document.getElementById('next');
let wave = document.getElementById('wave');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let audio = document.getElementById('audio');
let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');
let poster = document.getElementById('poster');
let secs = document.getElementById('secs');
let mins = document.getElementById('mins');
let search = document.getElementById('search');
var Interval;
var tens = 0;
var minutes = 0;
//Audio Playing function
let audioPlay = async() => {
    wave.classList.add('activeNow');
    play.style.display = 'none';
    pause.style.display = 'inline';
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
    await audio.play();
    console.log(audio.duration);
}
let songs = ['Sawaar Loon', 'Galliyan', 'Jeene Laga Hoon', 'Teri Meri Kahaani', 'Samjhawan', 'I Love You'];
// let songNum = [song1,song2];
let startSong = (song,sub,pstr) =>{
    title.innerHTML = `${song}`;
    audio.src = `media/${song}.mp3`;
    subtitle.innerHTML = `${sub}`;
    poster.src = `${pstr}`
    audioPlay();
}


play.onclick = () => {
    audioPlay();
}
pause.onclick = () => {
    wave.classList.remove('activeNow');
    play.style.display = 'inline';
    pause.style.display = 'none';
    clearInterval(Interval);
    audio.pause();
}

function startTimer () {
    tens++; 
    
    if(tens <= 9){
      secs.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
        secs.innerHTML = tens;
        
    } 
    
    if (tens > 60) {
      minutes++;
      mins.innerHTML = "0" + minutes;
      tens = 0;
      mins.innerHTML = "0" + 0;
    }
    
}

let reset = () =>  {
    clearInterval(Interval);
    tens = "00";
    minutes = "00";
    secs.innerHTML = tens;
    mins.innerHTML = minutes;
}


/* || SONGS ||*/ 
let song1 = document.getElementById('song1');
let song2 = document.getElementById('song2');
let song3 = document.getElementById('song3');
let song4 = document.getElementById('song4');
let song5 = document.getElementById('song5');
let song6 = document.getElementById('song6');
let song7 = document.getElementById('song7');
let song8 = document.getElementById('song8');
let song1Title = document.getElementById('song1Title');
let song2Title = document.getElementById('song2Title');
let song3Title = document.getElementById('song3Title');
let song4Title = document.getElementById('song4Title');
let song5Title = document.getElementById('song5Title');
let song6Title = document.getElementById('song6Title');
let song7Title = document.getElementById('song7Title');
let song8Title = document.getElementById('song8Title');
let songIDs = [song1Title,song2Title,song3Title,song4Title,song5Title,song6Title,song7Title,song8Title];

search.onkeyup = (e) =>{
    songIDs.forEach(ele =>{
        let val = ele.innerHTML;
        if(!val.startsWith(e.target.value)){
            ele.parentElement.style.display = 'none';            
        }
        console.log(e.target.value);
    });``
}

//Song Playing function
song1.onclick = () =>{
    let song1Title = document.getElementById('song1Title').innerHTML;
    let song1Subtitle = document.getElementById('song1Subtitle').innerHTML;
    let song1Img = document.getElementById('song1Img').src;
    reset();
    startSong(song1Title,song1Subtitle,song1Img);
}
song2.onclick = () =>{
    let song2Title = document.getElementById('song2Title').innerHTML;
    let song2Subtitle = document.getElementById('song2Subtitle').innerHTML;
    let song2Img = document.getElementById('song2Img').src;
    reset();
    startSong(song2Title,song2Subtitle,song2Img);
}
song3.onclick = () =>{
    let song3Title = document.getElementById('song3Title').innerHTML;
    let song3Subtitle = document.getElementById('song3Subtitle').innerHTML;
    let song3Img = document.getElementById('song3Img').src;
    reset();
    startSong(song3Title,song3Subtitle,song3Img);
}
song4.onclick = () =>{
    let song4Title = document.getElementById('song4Title').innerHTML;
    let song4Subtitle = document.getElementById('song4Subtitle').innerHTML;
    let song4Img = document.getElementById('song4Img').src;
    reset();
    startSong(song4Title,song4Subtitle,song4Img);
}
song5.onclick = () =>{
    let song5Title = document.getElementById('song5Title').innerHTML;
    let song5Subtitle = document.getElementById('song5Subtitle').innerHTML;
    let song5Img = document.getElementById('song5Img').src;
    reset();
    startSong(song5Title,song5Subtitle,song5Img);
}
song6.onclick = () =>{
    let song6Title = document.getElementById('song6Title').innerHTML;
    let song6Subtitle = document.getElementById('song6Subtitle').innerHTML;
    let song6Img = document.getElementById('song6Img').src;
    reset();
    startSong(song6Title,song6Subtitle,song6Img);
}
song7.onclick = () =>{
    let song7Title = document.getElementById('song7Title').innerHTML;
    let song7Subtitle = document.getElementById('song7Subtitle').innerHTML;
    let song7Img = document.getElementById('song7Img').src;
    reset();
    startSong(song7Title,song7Subtitle,song7Img);
}
song8.onclick = () =>{
    let song8Title = document.getElementById('song8Title').innerHTML;
    let song8Subtitle = document.getElementById('song8Subtitle').innerHTML;
    let song8Img = document.getElementById('song8Img').src;
    reset();
    startSong(song8Title,song8Subtitle,song8Img);
}


let bottomBorder = document.getElementById('bottomBorder');
let forYou = document.getElementById('forYou');
let underline = () =>{
    bottomBorder.style.marginLeft = '20px'
}
let remove = () =>{
    bottomBorder.style.marginLeft = ''
}

const like = document.getElementById('like');
const likeIconOn = document.getElementById('likeIconOn');
const likeIconOff = document.getElementById('likeIconOff');
like.onclick = () =>{
    if(like.innerHTML == 'Like'){
        likeIconOn.style.display = "inline";
        likeIconOff.style.display = "none";
        like.innerHTML = 'unlike';
    }
    else{
        likeIconOn.style.display = "none";
        likeIconOff.style.display = "inline";
        like.innerHTML = 'Like';
    }
}
const playlistHead = document.getElementById('playlistHead');
const display = document.getElementById('display');
playlistHead.onclick = () =>{
    console.log('chu');
}
// recent.onclick = () => wave.classList.remove('activeNow');
