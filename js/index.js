var sijalicaZuta = document.getElementsByClassName('sijalica-zuta')[0];

function sijalicaZutaAnim() {
  sijalicaZuta.style.top = '-2vh';
}

var sijalicaPlava = document.getElementsByClassName('sijalica-plava')[0];

function sijalicaPlavaAnim() {
  sijalicaPlava.style.left = '-0vh';
}

var coverBg = document.getElementsByClassName('coverBg')[0];

function coverBgAnim() {
  coverBg.style.transition = '2s';
  coverBg.style.scale = '1';
  coverBg.style.opacity = '1';

}



var mainHeading = document.getElementsByClassName('mainHeading')[0];

function mainHeadingAnim() {
  mainHeading.style.transition = '1.5s'
  mainHeading.style.scale = '1';
  setTimeout(function() {
    mainHeading.style.color = 'rgba(255,255,255,0.9)'
  }, 1000);

}

window.addEventListener('load', () => {
  sijalicaZutaAnim()
  sijalicaPlavaAnim()
  coverBgAnim();
  mainHeadingAnim();
})
