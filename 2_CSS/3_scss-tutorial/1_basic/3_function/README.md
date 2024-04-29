# Sass Function

Dưới đây là cách sử dụng một số hàm SCSS phổ biến:

## Build-in

Hàm `Math`: Sass cung cấp các hàm tính toán cơ bản như `add()`, `subtract()`, `multiply()`, `divide()` để thực hiện các phép tính toán đơn giản.
```scss
$width: 100px;
$primary-color: #3498db;
$list: apple, orange, banana;

.element {
  width: add($width, 50px); // Kết quả là 150px
}

.button {
  background-color: lighten($primary-color, 10%); // Sáng lên 10%
  border-color: darken($primary-color, 10%); // Tối đi 10%
}

.element {
  content: nth($list, 2); // Kết quả là orange
}
```

## Cách define một function bằng @mixin

```scss 
@mixin border($width, $color) {
  border: $width solid $color;
}

.element {
  @include border(2px, #ccc); // Sử dụng mixin border với độ dày 2px và màu xám nhạt
}
```
