
# Animation

## What are CSS Animations?

- Animations cho phép một phần tử dần dần thay đổi từ kiểu này sang kiểu khác. 
- Bạn có thể thay đổi bao nhiêu thuộc tính CSS tùy thích. 
- Để sử dụng Animations CSS, trước tiên bạn phải chỉ định một số khung hình chính cho Animations. 
- Khung hình chính chứa kiểu dáng mà phần tử sẽ có tại một số thời điểm nhất định.
  
### @keyframes Rule

- Khi bạn chỉ định kiểu CSS bên trong quy tắc @keyframes, Animations sẽ dần thay đổi từ kiểu hiện tại sang kiểu mới vào những thời điểm nhất định. 
- Để Animations hoạt động, bạn phải liên kết Animations đó với một phần tử. 
- Ví dụ sau liên kết Animations "example" với phần tử <div>. Animations sẽ kéo dài trong 4 giây và nó sẽ dần thay đổi màu nền của phần tử <div> từ "đỏ" sang "vàng":

```css
/* The animation code */
@keyframes example {
  from { background-color: red; }
  to { background-color: yellow; }
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

### animation-duration

- Thuộc tính xác định thời gian hoàn thành một hoạt ảnh. 
- Cũng có thể sử dụng phần trăm. Bằng cách sử dụng phần trăm, bạn có thể thêm bao nhiêu thay đổi về kiểu tùy thích.

> Nếu thuộc tính thời lượng hoạt ảnh không được chỉ định thì sẽ không có hoạt ảnh nào xảy ra vì giá trị mặc định là 0s (0 giây).

### Delay an Animation

- Thuộc tính animation-delay chỉ định độ trễ khi bắt đầu hoạt ảnh. Ví dụ sau có độ trễ 2 giây trước khi bắt đầu hoạt ảnh
- Giá trị âm cũng được cho phép. Nếu sử dụng giá trị âm, `hoạt ảnh sẽ bắt đầu như thể nó đã phát được N giây.`

## Set How Many Times an Animation Should Run

- The `animation-iteration-count` property specifies the number of times an animation should run.
- The following example uses the value "`infinite`" to make the animation continue for ever

## Run Animation in Reverse Direction or Alternate 

- Thuộc tính `animation-direction` chỉ định liệu một hoạt ảnh sẽ được phát tiến, lùi hay theo chu kỳ luân phiên.
- Thuộc tính animation-direction có thể có các giá trị sau: 
  - `normal` - Hoạt ảnh được phát như bình thường (chuyển tiếp). Đây là mặc định 
  - `reverse` - Hoạt ảnh được phát theo hướng ngược lại (ngược) 
  - `alternate` - Hoạt ảnh được phát tiến trước, sau đó phát lùi 
  - `alternate-reverse` - Hoạt ảnh được phát ngược trước, sau đó chuyển tiếp

## Specify the Speed Curve of the Animation

- Thuộc tính `animation-timing-function` chỉ định đường cong tốc độ của hoạt ảnh. 
- Thuộc tính `animation-timing-function` có thể có các giá trị sau: 
  - `ease` - Chỉ định hoạt ảnh có khởi đầu chậm, sau đó nhanh, rồi kết thúc chậm (đây là mặc định) 
  - `linear` - Chỉ định hoạt ảnh có cùng tốc độ từ đầu đến cuối 
  - `easy-in` - Chỉ định hoạt ảnh có khởi đầu chậm
  - `easy-out` - Chỉ định hoạt ảnh có kết thúc chậm 
  - `easy-in-out` - Chỉ định hoạt ảnh có khởi đầu và kết thúc chậm 
  - `cub-bezier(n,n,n,n)` - Cho phép bạn xác định các giá trị của riêng mình trong hàm cub-bezier

## Specify the fill-mode For an Animation

- Thuộc tính `animation-fill-mode` chỉ định kiểu cho phần tử đích khi hoạt ảnh không phát (trước khi hoạt ảnh bắt đầu, sau khi hoạt ảnh kết thúc hoặc cả hai). 
- Thuộc tính `animation-fill-mode` có thể có các giá trị sau: 
  - `none` - Giá trị mặc định. Hoạt ảnh sẽ không áp dụng bất kỳ kiểu nào cho phần tử trước hoặc sau khi nó thực thi 
  - `forwards` - Phần tử sẽ giữ lại các giá trị kiểu được đặt bởi khung hình chính cuối cùng (phụ thuộc vào hướng hoạt ảnh và số lần lặp hoạt ảnh)
  - `backwards` - Phần tử sẽ nhận các giá trị kiểu được đặt bởi khung hình chính đầu tiên (phụ thuộc vào hướng hoạt ảnh) và giữ lại giá trị này trong khoảng thời gian trễ hoạt ảnh cả hai - Hoạt ảnh sẽ tuân theo các quy tắc cho cả tiến và lùi, mở rộng các thuộc tính hoạt ảnh theo cả hai hướng

## Animation Shorthand Property

```css
div {
  animation: example 5s linear 2s infinite alternate;
}
```

## Reference
https://www.w3schools.com/css/css3_transitions.asp
https://www.joshwcomeau.com/animation/css-transitions/

https://www.w3schools.com/css/css3_animations.asp
https://www.freecodecamp.org/news/how-to-create-custom-css-animations/
https://semicolon.dev/tutorial/css/css-animation-tutorial
https://marksheet.io/css-animations.html