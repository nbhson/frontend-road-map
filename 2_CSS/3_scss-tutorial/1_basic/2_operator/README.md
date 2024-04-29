# Sass Operators
Sass facilitates you to do basic mathematical operations in the style sheet. It is very simple to apply the appropriate arithmetic symbol.

> Sass provides some standard math operators i.e. +, -, *, /, and %

Let's take an example to do some simple math to calculate width for an aside and article.

SCSS Syntax:

```scss
  .container { width: 100%; }  
  article[role="main"] {  
    float: left;  
    width: 600px / 960px * 100%;  
  }  
  aside[role="complementary"] {  
    float: right;  
    width: 300px / 960px * 100%;  
  }   
```