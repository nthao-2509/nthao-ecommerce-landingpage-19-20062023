import HomeComponent from "components/homeComponent";
import IndexHomePage from "pages/homePages";
import { TypeViewChildrenRoute } from "types/Types";

export const ChildrenRouteHome: TypeViewChildrenRoute[] = [
  {
    collapse: false,
    component: <HomeComponent />,
    icon: undefined,
    name: "home",
    index: true,
    path: "/",
    roles: ["user"],
    views: [
      // {
      //   collapse: false,
      //   component: <Page404 />,
      //   icon: undefined,
      //   name: 'Not Found',
      //   path: '/not-found',
      //   roles: ['user'],
      // }
    ],
  },
];
