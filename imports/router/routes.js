import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }, {
    path: '*',
    component: NotFound
  }
];

export default routes;
