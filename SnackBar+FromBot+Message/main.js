const WRAPPER = 'wrapper'
// window.addEventListener("ab.BridgeReady", function(){
// FIXME:
window.addEventListener("DOMContentLoaded", function(){
  setTimeout(slideIn, 1000);
}, false);

function slideIn() {
  const elem = document.getElementById(WRAPPER)
  elem.classList.add('slideIn')
}

function slideOut() {
  document.getElementById(WRAPPER).classList.remove('slideIn')
}

function closeWithoutEvent() {
  slideOut();
  setTimeout(() => {
    window.location = 'appboy://close?abButtonId=0';
  }, 600);
}

function closeWithEvent(customEvent) {
  slideOut();
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
  slideOut();
  setTimeout(() => {
    window.location = popupLink;
  }, 600);
}
