import { HashRouter, useRoutes } from "react-router-dom"
import Error404 from "../Error"
import Home from "../Home"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/*', element: <Error404 /> }
  ])

  return routes
}

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}
