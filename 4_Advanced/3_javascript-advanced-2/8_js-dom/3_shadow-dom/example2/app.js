// Định nghĩa custom element
class CustomWidget extends HTMLElement {
  constructor() {
    super();

    // Tạo Shadow DOM với chế độ 'open'
    const shadowRootOpen = this.attachShadow({ mode: "open" });
    shadowRootOpen.innerHTML = `
        <style>
          /* CSS trong Shadow DOM */
          :host {
            display: block;
            border: 2px solid green;
            padding: 10px;
          }
        </style>
        <div>Open Shadow DOM: I'm a custom widget!</div>
      `;

    // Tạo Shadow DOM với chế độ 'closed'
    const shadowRootClosed = this.attachShadow({ mode: "closed" });
    shadowRootClosed.innerHTML = `
        <style>
          /* CSS trong Shadow DOM */
          :host {
            display: block;
            border: 2px solid blue;
            padding: 10px;
          }
        </style>
        <div>Closed Shadow DOM: I'm a custom widget!</div>
      `;
  }
}

// register custom DOM elements
customElements.define("custom-widget", CustomWidget);
