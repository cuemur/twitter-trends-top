import Home from 'containers/Home';
import Trends from 'containers/Trends';

const routes = [
  { path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/trends/:id',
    component: Trends
  }
];

export default routes;
