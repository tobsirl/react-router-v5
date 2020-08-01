# Code Splitting 
The goal of code splitting is reduce the amount of code that the client needs to download to have a working app.

The basic idea is don't download code until the client needs it. Currently this is difficult to acheive because ES modules are static and don't allow for dynamic imports. Dynamic imports have been purposed and will be availabe in the near future.

Once this change goes through the ECMAScript process, we will be able to use import as a function.

```js
if (editPost === true) {
  import('./editpost')
    .then((module) => module.showEditor())
    .catch((e) => )
}
```
#### Where to split the code
Code splitting can be implemented at:
1. Split at the route level 😄
2. Split at the component level 😃

The most common way is to split at the route level, overly this just feels more natural.


