const getWrapper = document.querySelector('.headingwrapper');
const getHeadingText = getWrapper.querySelector('.jumboHeading');
const walk = 100;

function shadow(e){
  const { offsetWidth: width, offsetHeight: height } = getWrapper;
  let { offsetX: x, offsetY: y } = e;
  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  
  const moveX = Math.round((x/ width * walk) - (walk/2));
   const moveY = Math.round((y/ height * walk) - (walk/2));
  
   getHeadingText.style.textShadow = ` ${moveX}px  ${moveY}px 0 #0000002b`;
}
getWrapper.addEventListener('mousemove', shadow);