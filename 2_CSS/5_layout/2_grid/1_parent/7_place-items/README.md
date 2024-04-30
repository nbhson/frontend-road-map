# place-items

place-items sets both the align-items and justify-items properties in a single declaration.

Values:
- <align-items> / <justify-items> – The first value sets align-items, the second value justify-items. If the second value is omitted, the first value is assigned to both properties.

```scss
.container {
  display: grid;
  place-items: center;
}
```
