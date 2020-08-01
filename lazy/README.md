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

## React.lazy + React.Suspense
`React.lazy` takes in a single argument - a function that invokes a dynamic `import`. What it returns is a regular React Component.

```js
const LazyHomeComponent = React.lazy(() => import('./Home'))

...

<LazyHomeComponent />

```
With `Dynamic Imports` being asynchronous we can have an unspecified amount of time the client needs to wait before the component is loaded, rendered, and the UI is displayed.

To solve this problem we can use React's `Suspense` component passing it a `fallback` element.

```js
const AdDashboard = React.lazy(() => import('./AdDashboard'))
const Analytics = React.lazy(() => import('./Analytics'))
const Settings = React.lazy(() => import('./Settings'))

function App () {
  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <AdDashboard />
        <Analytics />
        <Settings />
      </React.Suspense>
    </div>
  )
}
```

The benefit of code splitting can be seen when we run:
```sh
npm run build
```
<img width="851" alt="split-v5" src="https://user-images.githubusercontent.com/25591390/89098460-bd944500-d3df-11ea-8151-fb662d59b816.png">
Now our application is split into three separate chucks based on the selected route. Before code splitting the entire site would be downloaded for the end user.
