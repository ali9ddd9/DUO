let main = document.getElementById('main');
let crs = document.getElementById('cursor');

main.addEventListener('mousemove',((dets)=>{
  crs.style.left = dets.x + 'px';
  crs.style.top = dets.y + 'px';
}))

let video = document.getElementsByClassName('video')[0];
let crso = document.getElementById('video-cursor');

video.addEventListener('mousemove',((dets)=>{
  crso.style.visibility = 'visible';
  crs.style.visibility = 'hidden';
  crso.style.left = dets.x +40 + 'px';
  crso.style.top = dets.y +450 + 'px';
  
}))
video.addEventListener('mouseleave',(()=>{
  crso.style.visibility = 'hidden';
  crs.style.visibility = 'visible';
}))