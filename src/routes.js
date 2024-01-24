import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Classes = React.lazy(() => import('./views/dashboard/Classes'))
const Student = React.lazy(() => import('./views/dashboard/Student'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/classes', name: 'Classes', element: Classes },
  { path: '/Student', name: 'Student', element: Student },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
