# Animated Transitions
First step is to install react-transition-group
```sh
npm i react-transition-group
```

## Transition Group
The way you use `TransitionGroup` as a wrapper component.
```js
<TransitionGroup>
  {/* stuff */}
</TransitionGroup>
```
Defined, it’s a “state machine for managing the mounting and unmounting of components over time”. In practice, the first thing it does is it keeps track of all of its children (`props.children`) inside of its local state.

Then, whenever its props change and its `getDerivedStateFromProps` is called, it loops over the next `children` and figures out which are new (entering), which have been deleted (exiting), and which children have stayed the same. 

Once it figures that out, it clones and merges all of its children together passing to each item a few props which represent its status (`exiting`, `entering`, etc.). 

At this point, it updates its local state with all of the merged children (which all individually know if they’re entering, exiting, or remaining the same). That causes a re-render and the new merged `children` is shown to the view.

Basically, `TransitionGroup` renders all its new and old children after passing certain props to each based on if they're new, old, or the same.

Why does it render **all** the old children, new children, and children that didn't change. The reason is for animation purposes. By keeping track of the `exiting` and `entering` children you can tansition between them.

The last important item to mention about `TransitionGroup` is the way in which it keeps track of which children are which. This is similar to the key prop when mapping over an array to create a list UI, each array item requres a unique `key` prop.

`TransitionGroup` uses the key prop to uniquely identify which children have changed (entered or exited)

## CSSTransition
`CSSTransition` takes the information it got from `TransitionGroup`, specifically if certain children are entering, leaving, or staying the same, and it applies a pair of class names to them during the ‘appear’, ‘enter’, and ‘exit’ stages of the transition based on their status.

What this allows you to do is, based on those class names, have CSS in your app which will select the same class names that `CSSTransition` is applying and add some styles to those elements. For example, if we told `CSSTransition` to apply a `fade` class, our CSS might look like this.

```css
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
```
That way we’ll adjust the opacity of an element anytime it has a class name of `fade-enter` (which `CSSTransition` will apply for us).

`CSSTransition` takes two props, `timeout` and `classNames`. 

`timeout` specifies how long `TransitionGroup` will display **all** of its children before removing the old children (aka how long the animation will take place).

`classNames` is the CSS class that is applied to the component as it enters or exits.

```js
<TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames='fade'
        >
        {/* stuff */}
        </CSSTransition>
      </TransitionGroup>
```

The last piece of the puzzle is the `key` prop. To provide a unique key we can use the `useLocation` custom Hook. This will return us a location object which has a key property we can use.
```js
const location = useLocation()
...
<TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames='fade'
          key={location.key}
        >
```
Lastly we need to pass `Switch` the location prop. By default it uses `context.location`. When both Switches are rendered, they’re both grabbing the location from context. By the time they render, `context.location` has already been updated to the new location.

This means that instead of getting one Switch with the old location and one with the new location, both have the new location since both got the location from context.location.

When you use `Switch`, it can take in an optional `location` prop. That prop allows you to tell `Switch` “Hey, use this location instead of the location from context”. Exactly what we need. Since we already have access to `location` from earlier when we used `useLocation`, all we have to do is pass it so `Switch`.

```js
<Switch location={location}>
```