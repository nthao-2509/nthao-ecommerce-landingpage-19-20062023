import { TypeRoutePublic } from "types/Types";
import { ChildrenRouteHome } from "./ChildrenRoute";
import IndexHomePage from "pages/homePages";

export const PublicRoute: TypeRoutePublic[] = [
  {
    collapse: true,
    component: <IndexHomePage />,
    icon: undefined,
    name: "home",
    path: "/",
    roles: ["user"],
    views: [...ChildrenRouteHome],
  },
];
