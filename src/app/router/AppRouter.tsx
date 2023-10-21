import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, NotFoundPage, PostPage } from '../../pages';
import { RouteDescriptions, RouteName } from '../../shared/config';

const routes: RouteDescriptions = [
  {
    path: RouteName.Main,
    component: <MainPage/>,
  },
  {
    path: RouteName.Post,
    component: <PostPage/>,
  },
  {
    path: RouteName.NotFound,
    component: <NotFoundPage/>,
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