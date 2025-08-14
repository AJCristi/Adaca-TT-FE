import { Navigate } from "react-router";
import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "User List" },
        { name: "description", content: "Users List!" },
    ];
}

export default function Home() {
  return <Navigate to="/users" replace />;
}