window.addEventListener("DOMContentLoaded", function(){
// window.addEventListener("ab.BridgeReady", function(){
  setTimeout(() => {
    let children = document.getElementById('wrapper').children
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('fade')
    }
  }, 400);
}, false);

function fade() {
  let children = document.getElementById('wrapper').children;
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add('fade')
  }
}

function closeWithoutEvent() {
  fade();
  setTimeout(() => {
    window.location = 'appboy://close?abButtonId=0';
  }, 600);
}

function closeWithEvent(customEvent) {
  fade();
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
  fade();
  setTimeout(() => {
    window.location = popupLink;
  }, 600);
}