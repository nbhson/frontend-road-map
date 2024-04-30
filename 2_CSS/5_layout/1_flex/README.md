# Flex

## What's Flexbox

When you're building a house, you need a blueprint. In the same way, we need a blueprint when we're making websites. And Flexbox is the blueprint.

The Flexbox model allows us to layout the content of our website. Not only that, it helps us create the structures needed for creating responsive websites for multiple devices.

## Flexbox Architecture

So how does Flexbox architecture work? The flex-items [Contents] are distributed along the main axis and cross axis. And, depending on the flex-direction property, the layout position changes between rows and columns.

![Architecture](./architect.png)

## Flexbox Chart

This chart contains every possible property and value you can use when you're working with Flexbox. You can reference it while doing your projects and experiment with different values.

![Chart](./chart.png)

## Shorthand Flexbox Properties

### flex shorthand

![alt text](https://dev-to-uploads.s3.amazonaws.com/i/onoxj7gs9xj4wuf87kjl.png)

```scss
.box-2{
    flex : 2 1 30em;
}
```

### flex-flow shorthand

![alt text](https://dev-to-uploads.s3.amazonaws.com/i/awniqyrepbha5jdquwxh.png)

```scss
.container{
    flex-flow : row wrap;
}
```

### place-content shorthand

![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/72yaytxgighz0cjskp2e.png)

```scss
.container {
    place-content : center flex-end;
}

<https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/>

<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>