 import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import Student from "views/Student/Student";
import StudentEdit from "views/Student/StudentEdit";
import StudentAdd from "views/Student/StudentAdd";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";
import ElectionSession from "views/ElectionSession/ElectionSession";

let dashboardRoutes = [

    {
        path: "/dashboard/dashboard",
        name: "Dashboard",
        admin: true,
        icon: "pe-7s-graph",
        component: Dashboard
    },
    {
        path: "/dashboard/user",
        name: "User Profile",
        admin: true,
        icon: "pe-7s-user",
        component: UserProfile
    },
    {
        path: "/dashboard/table",
        name: "Students",
        admin: true,
        icon: "pe-7s-note2",
        component: Student
    },
    {
        path: "/dashboard/typography",
        name: "Typography",
        admin: true,
        hidden: true,
        icon: "pe-7s-news-paper",
        component: Typography
    },
    { path: "/dashboard/icons", hidden: true, name: "Icons", admin: true, icon: "pe-7s-science", component: Icons },
    { path: "/dashboard/maps", hidden: true, name: "Maps", admin: true, icon: "pe-7s-map-marker", component: Maps },
    {
        path: "/dashboard/notifications",
        name: "Notifications",
        admin: true,
        hidden: true,
        icon: "pe-7s-bell",
        component: Notifications
    },
    {
        path: "/dashboard/student-edit/:data",
        name: "Student Edit",
        admin: true,
        hidden: true,
        component: StudentEdit
    },
    {
        path: "/dashboard/student-add",
        name: "Student Add",
        admin: true,
        hidden: true,
        component: StudentAdd
    },
    {
        path: "/dashboard/election-session",
        name: "Election Session",
        admin: true,
        hidden: false,
        icon: "pe-7s-hammer",
        component: ElectionSession
    },
    { redirect: true, path: "/", to: "/login", name: "Login Page" }
];

export default dashboardRoutes;
