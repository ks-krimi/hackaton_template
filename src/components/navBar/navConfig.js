import {
  Dashboard,
  AccountCircle,
  PersonAdd,
  Warning
} from '@material-ui/icons'

const navbarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: <Dashboard />,
    activeIcon: <Dashboard color="primary" />
  },
  {
    title: 'login',
    path: '/auth/login',
    icon: <AccountCircle />,
    activeIcon: <AccountCircle color="primary" />
  },
  {
    title: 'register',
    path: '/auth/register',
    icon: <PersonAdd />,
    activeIcon: <PersonAdd color="primary" />
  },
  {
    title: 'not found',
    path: '/404',
    icon: <Warning />,
    activeIcon: <Warning color="primary" />
  }
]

export default navbarConfig
