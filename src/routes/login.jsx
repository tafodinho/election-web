import LoginPage from "views/login/LoginPage";
import dashboardRoutes from "./dashboard";

let logRoutes = [
    {
        path: "/login",
        name: "Login",
        icon: "pe-7s-graph",
        component: LoginPage
    },
    {
        redirect: true,
        path: "/",
        to: "/login",
        name: "Login Page"
    }

];

export default logRoutes;
