
# Cross Browser Code

Khả năng tương thích giữa các trình duyệt là điều bắt buộc trong quá trình phát triển phần mềm, vì mọi trang web phải hoạt động hoàn hảo trên các nền tảng hệ điều hành và trình duyệt khác nhau.

Vì CSS là một yếu tố cần thiết trong việc phát triển bất kỳ trang web hiện đại nào. Với mức độ phân mảnh trình duyệt thiết bị trên thế giới, CSS đương nhiên sẽ phải tương thích với nhiều trình duyệt để cho phép một trang web hiển thị hoàn hảo cho người dùng có các tùy chọn trình duyệt khác nhau.

CSS là một khía cạnh tạo kiểu được sử dụng trên các trang web để làm cho chúng trông vượt trội hơn về mặt phong cách. Bài viết này sẽ khám phá các kỹ thuật CSS khác nhau được sử dụng để cải thiện khả năng tương thích trên nhiều trình duyệt của trang web.

## 3 CSS techniques for Improved Cross Browser Compatibility

### Setting gradient color on div in different browsers

```css
example {
  border:1px solid #999;
  width: 100px;
  height: 100px;
  padding:5px;
  color:#fff;

  background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);

  /* -webkit- */
  background: -webkit-gradient(linear, left top, left bottom, from(#314bb8), to(#1a3356));
  /* -moz- */
  -moz-linear-gradient(start location, start color, end color)
}
```

### Setting border-radius in Popular Browsers (Mozilla, Chrome, Safari, Opera)

Syntax: `border-*-*-radius: [ <length> | <%> ] [ <length> | <%> ]`

```css
#div1 {
  border-radius: 3px;

  -moz-border-radius: 3px;
  -webkit-border-radius: 2px;
  -khtml-border-radius: 2px;
}
```
### Setting background image for select tags in Chrome

```css
select {
  width: 80px;
  height: 30px;
  border: none;
  background-color: Transparent;
  background: url(image/bk_select.png) no-repeat 0 0;
  padding: 4px;
  line-height: 5px;

  -webkit-appearance: none;
}
```

## Commonly Observed Cross-Browser Compatibility Issues

- Người ta có thể tìm ra các vấn đề với HTML và CSS trong khi triển khai các tính năng sử dụng tiền tố CSS.
- Các phiên bản cũ hơn của hầu hết các trình duyệt không hỗ trợ các tính năng mới hơn như HTML5 Audio / Video, FlexBox, CSS Grids, v.v.
- Các phiên bản cũ hơn của Internet Explorer không hỗ trợ nhiều chức năng CSS như bộ chọn CSS3, Màu CSS3, Không gian tên CSS, v.v.
- Các lý do phổ biến khác gây ra sự cố tương thích trên nhiều trình duyệt là:
  + Sự không tương thích của trình duyệt với hệ điều hành (OS).
  + Các triển khai khác nhau của JavaScript 
  + Lỗi trong trình duyệt Vấn đề với căn chỉnh trang


> Supported by Edge with prefix `-webkit-`
> Supported by Firefox with prefix `-moz-`
> Supported by Chrome with prefix `-webkit-`
> Supported by Safari with prefix `-webkit-`
> Supported by Opera with prefix `-webkit-`

<https://www.w3schools.com/cssref/css3_browsersupport.asp>