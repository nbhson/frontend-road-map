# DOM Summary

## DOM Manipulation
- `Khái niệm`: Đây là quá trình trực tiếp thay đổi và tương tác với DOM thực tế trên trình duyệt.
- `Cách thức hoạt động`: Các phương thức như getElementById, appendChild, innerHTML, và các phương thức khác được sử dụng để thêm, sửa đổi hoặc xóa trực tiếp các phần tử trong cây DOM.
- `Hiệu suất`: Có thể gây ra hiệu suất kém nếu thực hiện nhiều thay đổi trực tiếp trên DOM, đặc biệt là trong các ứng dụng lớn và phức tạp.

## Virtual DOM
- `Khái niệm`: Đây là một biểu diễn **ảo** của cây DOM thực tế được lưu trữ trong bộ nhớ. Là một kỹ thuật được sử dụng trong các framework như React để tối ưu hóa quá trình cập nhật DOM.
- `Cách thức hoạt động`: Các thay đổi trong ứng dụng không được áp dụng trực tiếp lên DOM thực tế mà thay vào đó, được áp dụng trên Virtual DOM. Sau đó, Virtual DOM so sánh với DOM thực tế để xác định những thay đổi cần được áp dụng và chỉ cập nhật những phần thay đổi đó.
- `Hiệu suất`: Giúp tối ưu hóa hiệu suất bằng cách giảm số lượng thao tác trực tiếp trên DOM và chỉ cập nhật những phần thay đổi cần thiết.

## Shadow DOM:
- `Khái niệm`: Là một phần của Web Components, giúp tạo ra các phạm vi cục bộ và cô lập CSS và DOM.
- `Cách thức hoạt động`: Cung cấp một cơ chế để tạo ra một phạm vi cô lập nơi mà CSS và DOM của một phần tử không bị ảnh hưởng bởi các quy tắc CSS và DOM bên ngoài.
- `Hiệu suất`: Mục tiêu chính không phải là tối ưu hóa cập nhật DOM mà là cung cấp tính cô lập và tái sử dụng.


Tóm tắt sự khác biệt:
- **Virtual DOM**: Tập trung vào tối ưu hóa cập nhật DOM và giảm thiểu thao tác trực tiếp trên DOM để tăng hiệu suất.
- **Shadow DOM**: Tập trung vào việc cô lập và tái sử dụng các phần tử, giúp tránh xung đột CSS và DOM bên ngoài và tạo ra một phạm vi cục bộ cho các phần tử.