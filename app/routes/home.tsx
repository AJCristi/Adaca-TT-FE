import { Navigate } from "react-router";
import type { Route } from "../+types/root";

export default function Home() {
  return <Navigate to="/users" replace />;
}