# Control Directives & Expressions

Sass control directives and expressions facilitate you to use styling based on some conditions. It also makes you able to apply same style many times with variations. It is supported by SassScript.

Control directives are the part of compass libraries. These are mainly used in mixin and require considerable flexibility.


| Index | Directive                                   | Description                                                                                                                                             |
| ----- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | `if() function`                             | The if() function is based on the condition. It returns only one result from two possible values.                                                       |
| 2     | `@if directive`                             | The @if directive accepts SassScript expressions and uses the nested styles whenever the result of the expression is anything other than false or null. |
| 3     | `@else if directive`                        | The Sass @else-if directive is used when @if directive is failed. If it is failed @else directive is used.                                              |
| 4     | `@for directive with through keyword`       | The @for directive facilitates you to generate styles in a loop.                                                                                        |
| 5     | `@each directive`                           | A variable is defined within the @each directive which contains the value of each item in a list.                                                       |
| 6     | `@each directive with multiple assignments` | We can use Sass @each directive with multiple values like $var1, $var2, $var3, ... in .                                                                 |
| 7     | `@for directive with to keyword`            | In Sass @for directive, the "to" keyword is used to specify the range form value to the value before value.                                             |
| 8     | `@while directives`                         | It takes SassScript expressions and until the statement evaluates to false it iteratively outputs nested styles.                                        |

