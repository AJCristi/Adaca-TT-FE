import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("users", "routes/users.tsx"),
    route("users/:id", "routes/users-detail.tsx"),
    index("routes/home.tsx"),
] satisfies RouteConfig;
