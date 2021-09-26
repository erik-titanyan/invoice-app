import { Spinner, SpinnerSize } from "@fluentui/react";
import { ComponentType, lazy, LazyExoticComponent, ReactNode } from "react";

export interface IRoute {
  path: string;
  exact?: boolean;
  fallback: NonNullable<ReactNode> | null;
  component?: LazyExoticComponent<ComponentType<any>>;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("../../pages/dashboard/Dashboard")),
    fallback: <Spinner size={SpinnerSize.large} />,
    private: true,
  },
  {
    path: "/login",
    exact: true,
    component: lazy(() => import("../../pages/login/Login")),
    fallback: <Spinner size={SpinnerSize.large} />,
    private: false,
  },
];
