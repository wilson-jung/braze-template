# 커스텀 방법

- 타이틀 수정
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

- 버튼 타입 
```html
// intex.html 파일에서
<div class="item confirm-button">확인</div>
```
`class="item confirm-button"` 이면 파란색 텍스트 버튼
`class="item confirm-cancel"` 이면 회색 텍스트 버튼
- 버튼 동작
```html
// intex.html 파일에서
<div class="item confirm-button" onclick="closeWithoutEvent()">
``` 
의 `onclick=""` 부분을 수정

  - 브레이즈에 이벤트를 보내지 않고 닫기
    - closeWithoutEvent()
  - 브레이즈에 이벤트를 보내고 닫기
    - closeWithEvent('no_more_xxx') 형식으로 사용
  - 딥링크로 보내기
    - 예> 쿠폰함으로 이동. openLink('tada-rider://coupons?abButtonId=1&abExternalOpen=true&abDeepLink=true')
