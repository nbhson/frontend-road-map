# grid

Gives an item a name so that it can be referenced by a template created with the grid-template-areas property. Alternatively, this property can be used as an even shorter shorthand for grid-row-start + grid-column-start + grid-row-end + grid-column-end.

Values:
- <name> – a name of your choosing
- <row-start> / <column-start> / <row-end> / <column-end> – can be numbers or named lines

```scss
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```
