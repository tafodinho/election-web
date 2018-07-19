import Dashboard from "layouts/Dashboard/Dashboard";
import Login from "layouts/Login/Login";

let indexRoutes = [
    { path: "/login", name: "Login", component: Login },
    { path: "/", name: "Dashboard", component: Dashboard },
];

export default indexRoutes;
