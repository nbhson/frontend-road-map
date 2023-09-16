# Strict mode

- Nhằm cải thiện một vài hạn chế trong các phiên bản trước đó
- Tránh quên từ khóa khai báo biến
- Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global

## Case sử dụng

### Báo lỗi khi hàm có tham số trùng tên 
```js
function sum(a, a) {
  return a + a
}
console.log(sum(6,9)); // 18 nếu không có strict mode | có strict mode báo lỗi

/** Không đặt tên biến, tên hàm bằng một số từ khóa nhạy cảm của ngôn ngữ */
var let = 10;
console.log(let);
```

### Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block

```js
if (true) {
  function sum(a, b) {
    console.log(a + b);
  }
}

sum(6,9) // 15 nếu ko có strict mode | có strict mode báo lỗi
```

### Báo lỗi khi gán lại giá trị cho thuộc tính có thể ghi: false

```js
const student = {
  fullName: "Nguyễn Văn A",
};
student.fullName = "Nguyễn Văn B"; // writeable = true
console.log(student);

const student = Object.freeze({
  // đóng băng không thể sửa
  fullName: "Nguyễn Văn A",
});
student.fullName = "Nguyễn Văn B"; // writeable = false => Lỗi không sữa được
console.log(student);
```

```js
const student = {};
Object.defineProperty(student, "fullName", {
  // newnew
  value: "Nguyễn Văn A",
  writeable: false,
});
student.fullName = "Nguyễn Văn B"; //  Lỗi
console.log(student);
```

## Chú ý

### Cách thêm strict mode

- Thêm use strict ở đầu file.js
- Thêm use strict ngay sau thẻ mở <script>
- Thêm use strict vào đầu phạm vi hàm

```js
"use strict"; // trước nó không được có đoạn code nào cả

var fullName = "Nguyen Van A"; // tạo ra biến fullName ở phạm vi global
function testFunc() {
  // "use strict";
  var age = 18; // tạo ra biến age ở phạm vi global
}
testFunc();
```
