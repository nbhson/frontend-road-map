# SVG Rectangle - <rect>

The <rect> element is used to create a rectangle and variations of a rectangle shape.

The <rect> element has six basic attributes to position and shape the rectangle:

`width`	    Required. The width of the rectangle
`height`	Required. The height of the rectangle
`x`	        The x-position for the top-left corner of the rectangle
`y`	        The y-position for the top-left corner of the rectangle
`rx`	    The x radius of the corners of the rectangle (used to round the corners). Default is 0
`ry`	    The y radius of the corners of the rectangle (used to round the corners). Default is 0


```html
<svg width="320" height="130" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="100" x="10" y="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:red" />
</svg>
```

The CSS `fill` property defines the fill color of the rectangle
The CSS `stroke-width` property defines the width of the border of the rectangle
The CSS `stroke` property defines the color of the border of the rectangle
The CSS `fill-opacity` property defines the opacity of the fill color (legal range: 0 to 1)
The CSS `stroke-opacity` property defines the opacity of the stroke color (legal range: 0 to 1)
The CSS `opacity` property defines the opacity value for the whole element (legal range: 0 to 1)
