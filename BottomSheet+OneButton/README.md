# 커스텀 방법

- 상단 이미지
```html
// index.html 파일에서
<img class="iconImg" src="https://placehold.co/150x120" />
```
src를 수정. 

- 상단 백그라운드 컬러
```css
/* main.css 파일에서 */
.bottomSheet .main-img {
  /* 상단 이미지 백그라운드 컬러 수정 */
  background-color: #32A2FA;
}
```
`#32A2FA` 을 원하는 컬러로 수정

- 타이틀 문구
```html
// intex.html 파일에서
<div class="title">타이틀 문구 영역</div>
```
`타이틀 문구 영역` 을 수정

- 설명문구
```html
// intex.html 파일에서
<div class="desc">(옵션) 설명 문구 영역입니다.<br/>최대 2줄 길이를 권장합니다.</div>
```
`(옵션) 설명 문구 영역입니다.<br/>최대 2줄 길이를 권장합니다.` 부분을 수정. 텍스트 사이에 `<br/>`을 넣을 경우 강제 줄바꿈 됨

- 버튼 동작
```html
// intex.html 파일에서
<div class="item confirm-button" onclick="closeWithoutEvent('test_credit_230704', 'tada-rider://coupons?abButtonId=1&abExternalOpen=true&abDeepLink=true')">버튼 문구</div>
``` 
의 `onclick=""` 부분을 수정

  - 브레이즈에 이벤트를 보내지 않고 닫기
    - closeWithoutEvent()
  - 브레이즈에 이벤트를 보내고 닫기
    - closeWithEvent('no_more_xxx') 형식으로 사용
  - 딥링크로 보내기
    - 예> 쿠폰함으로 이동. openLink('tada-rider://coupons?abButtonId=1&abExternalOpen=true&abDeepLink=true')
  - 딥링크 + 브레이즈 이벤트
    - openDeepLinkWithEventLog('eventName', 'deeplinkurl')
