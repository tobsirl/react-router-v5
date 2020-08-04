# Query Strings with React Router v5

Sometimes we need to pass information via the URL, to do this, we can use a query string.

A URL is made up of Route parameters e.g. `www.example.com/users/joebloggs/notes`

Route Parameter portion: `/users/joebloggs/notes`

URL's can also have Query Strings e.g. `www.example.com/users/joebloggs/notes?filter=top&origin=im`

Query String `?filter=top&origin=im`

To get informatoin on the URL we can use `useLocation` and `useRouteMatch`

## useLocation
`useLocation` returns a `location` object which has a `search` property whose value is the query string.

```js
const { search } = useLocation()
console.log(search) // "?filter=top&origin=im"
```

## useRouteMatch
`useRouteMatch` returns an object which contains information about how the `Route` was matched. Specifically, it has two properties on it, `path` and `url`.

`path - The path pattern used to match. Useful for building nested <Route>s`

`url - The matched portion of the URL. Useful for building nested <Link>s`

The most important takeaway from those definitions is to use `url` for creating nested `Routes` and `path` for nested `Link`.

```js
const { path, url } = useRouteMatch()

console.log(path) // /topics/:topicId/:subId
console.log(url) // /topics/react-router/url-parameters

return (
  ...
)
```

Notice that path is including the URL parameters and url is just the full URL. This is why one is used for Links and the other used for Routes.

When you’re creating a nested Link, you don’t want to include the URL parameters. You want the user to literally go to /topics/react-router/url-parameters. That’s why url is better for nested Links. However, when you’re matching certain patterns with Route, you want to include the URL parameters - that’s why path is used for nested Routes.

Now let’s head back to our example. As of right now, we’re hard-coding /topics into our Route and Links.

```js
function Topics () {
  const { url, path } = useRouteMatch()

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </div>
  )
}
```