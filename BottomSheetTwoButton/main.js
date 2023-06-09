const WRAPPER = 'wrapper'
// window.addEventListener("ab.BridgeReady", function(){
// FIXME:
window.addEventListener("DOMContentLoaded", function(){
  setTimeout(() => {
    let children = document.getElementById(WRAPPER).children
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('fade')
    }
    slideUp()
  }, 400);
}, false);

function fade() {
  let children = document.getElementById(WRAPPER).children;
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add('fade')
  }
}

function slideUp() {
  const elem = document.getElementById(WRAPPER)
  elem.classList.add('slideUp')
}

function slideDown() {
  document.getElementById(WRAPPER).classList.remove('slideUp')
  fade()
}

function closeWithoutEvent() {
  slideDown();
  setTimeout(() => {
    window.location = 'appboy://close?abButtonId=0';
  }, 600);
}


function closeWithEvent(customEvent) {
  slideDown();
  setTimeout(() => {
    appboyBridge.logCustomEvent(customEvent, {});
    window.location = 'appboy://close';
  }, 600)
}

/**
 *
 * @example
 * - 타다 딥링크
 * openLink('tada-rider://coupons?abButtonId=1&abExternalOpen=true&abDeepLink=true')
 */
function openLink(popupLink) {
  slideDown();
  setTimeout(() => {
    window.location = popupLink;
  }, 600);
}
