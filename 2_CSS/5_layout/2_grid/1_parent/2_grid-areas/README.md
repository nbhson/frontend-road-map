# grid-template-areas

Xác định mẫu lưới bằng cách tham chiếu tên của các vùng lưới được chỉ định bằng thuộc tính khu vực lưới (đại khái là xác định được element trên html bằng cách đặt tên với areas)

Việc lặp lại tên của vùng lưới sẽ khiến nội dung trải rộng trên các ô đó. Dấu chấm biểu thị một ô trống. Bản thân cú pháp cung cấp một hình ảnh trực quan về cấu trúc của lưới.

Values:

- <grid-area-name> – the name of a grid area specified with grid-area
- . – a period signifies an empty grid cell
none – no grid areas are defined

```scss
.container {
  grid-template-areas: 
    "<grid-area-name> | . | none | ..."
    "...";
}
```
