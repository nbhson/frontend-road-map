# SVG Polyline - <polyline>

The <polyline> element is used to create any shape that consists of only straight lines (that is connected at several points).

The <polyline> element has one basic attribute that defines the points of the polyline:

`points`	Required. The list of points of the polyline. Each point must contain an x coordinate and a y coordinate

```html
<svg height="210" width="500" xmlns="http://www.w3.org/2000/svg">
  <polyline points="0,0 50,150 100,75 150,50 200,140 250,140"
  style="fill:none;stroke:green;stroke-width:3" />
</svg>
```

The points attribute defines the list of points (pairs of x and y coordinates - cách trên cách trái) required to draw the polyline


