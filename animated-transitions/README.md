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