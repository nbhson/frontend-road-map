# Sass Variables

Sass variables are used to store information that can be reused throughout the stylesheet when you need. You can store things like colors, font stacks, or any CSS value according to your future reusability.

> The $ symbol is used to make something a variable. See the syntax.

SCSS Syntax:

```scss
  $font-stack:    Helvetica, sans-serif;  
  $primary-color: #333;  
    
  body {  
    font: 100% $font-stack;  
    color: $primary-color;  
  }  
```