import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../page1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    child: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    child: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    child: <Page1DetailB />
  }
];
