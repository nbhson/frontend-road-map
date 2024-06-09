# SVG Polygon - <polygon>

The <polygon> element is used to create a graphic that contains at least three sides.

The <polygon> element has one basic attribute that defines the points of the polygon:

`points`	Required. The list of points of the polygon. Each point must contain an x coordinate and a y coordinate

```html
<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 150,190 50,190" style="fill:lime;stroke:purple;stroke-width:3" />
</svg>
```

The `points` attribute defines the x and y coordinates for each corner of the polygon

