import { RouteObject, useRoutes } from "react-router-dom";
import config from "./config";

function Config() {
  const element = useRoutes(config as RouteObject[]);
  return element;
}

export default Config;
