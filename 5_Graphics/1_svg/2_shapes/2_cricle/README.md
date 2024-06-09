# SVG Circle - <circle>

The <circle> element is used to create a circle.

The <circle> element has three basic attributes to position and set the size of the circle:

`r`	      Required. The radius of the circle
`cx`	    The x-axis center of the circle. Default is 0
`cy`	    The y-axis center of the circle. Default is 0

```html
<svg width="320" height="130" xmlns="http://www.w3.org/2000/svg">
  <circle r="45" cx="50" cy="50" fill="red" />
</svg>
```

The `r` attribute defines the radius of the circle
The `cx` and `cy` attributes define the x- and y-axes center of the circle. If they are omitted, the circle's center is set to (0,0)
The `fill` attribute defines the color of the circle
The `stroke` attribute defines the color of the border around the circle
The `stroke-width` attribute defines the width of the border around the circle
The `opacity` attribute defines the opacity of the circle


