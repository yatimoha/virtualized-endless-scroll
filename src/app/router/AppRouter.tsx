import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, NotFound, Post } from '../../pages';
import { RouteDescriptions, RouteName } from '../../shared/config';

const routes: RouteDescriptions = [
  {
    path: RouteName.Main,
    component: <Main/>,
  },
  {
    path: RouteName.Post,
    component: <Post/>,
  },
  {
    path: RouteName.NotFound,
    component: <NotFound/>,
  },
];
export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {
        routes.map(({path, component}) => (
          <Route key={path} path={path} element={component}></Route>
        ))
      }
    </Routes>
  </BrowserRouter>
);