# URL Parameters with React Router v5
URL parameters are parameters whose values are set dynamically in a page’s URL. 

This allows a route to render the same component (UI) while passing that component the dynamic portion of the URL so it can change based off of it.

```js
<Route path='/:handle'>
  <Profile />
</Route>
```

Notice that the `path` has a `:` in front of it. That’s because it’s dynamic. Instead of matching literally, it’s matching for a specific pattern. 

With this app, anytime someone visits a route that matches that pattern (`/react`, `/sipderman`, `/anything`), the `Profile` component is going to be rendered.

To access the dynamic portion of the URL we can use a custom hook called `useParams`. `useParams` returns an object with a mapping between the URL Parameter and its value.

```js
import * as React from 'react'
import { useParams } from 'react-router-dom'

function Profile () {
  const [user, setUser] = React.useState(null)
  const { handle } = useParams()

  React.useEffect(() => {
    fetch(`https://api.twitter.com/user/${handle}`)
      .then(setUser)
  }, handle)

  return (
    ...
  )
}
```