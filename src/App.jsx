import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Layout
import RootLayout from './layout/RootLayout'
import Contact from './pages/Contact'
import About from './pages/About'
import Women from './pages/Women'
import Men from './pages/Men'
import Collections from './pages/Collections'
// Pages


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Collections />
        },
        {
          path: '/men',
          element: <Men />
        },
        {
          path: '/women',
          element: <Women />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }

      ]
    }
  ])
  return (
  <RouterProvider router={routes} />
  )
}

export default App