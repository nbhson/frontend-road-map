# SVG Path - <path>

The <path> element is used to define a path.

The <path> element has one basic attribute that defines the points and other commands of how to draw the path:

`d`	Required. A set of commands which define the path.
The following commands are available for path data:

M = moveto (move from one point to another point)
L = lineto (create a line)
H = horizontal lineto (create a horizontal line)
V = vertical lineto (create a vertical line)
C = curveto (create a curve)
S = smooth curveto (create a smooth curve)
Q = quadratic Bézier curve (create a quadratic Bézier curve)
T = smooth quadratic Bézier curveto (create a smooth quadratic Bézier curve)
A = elliptical Arc (create a elliptical arc)
Z = closepath (close the path)
Note: All of the commands above can also be expressed in lower case. Upper case means absolutely positioned, lower case means relatively positioned.

```html
<svg height="210" width="500" xmlns="http://www.w3.org/2000/svg">
  <path d="M150 5 L75 200 L225 200 Z"
  style="fill:none;stroke:green;stroke-width:3" />
</svg>
```



