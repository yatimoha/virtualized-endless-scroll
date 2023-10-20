export enum RouteName {
  Main = '/',
  Post = '/post/:id',
  NotFound = '*',
}

export type RouteDescription = {
  path: RouteName;
  component: JSX.Element;
}

export type RouteDescriptions = RouteDescription[]

