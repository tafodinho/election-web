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
import Vote from "views/Votes/Votes";
import Result from "views/Result/Result";
import Candidate from "views/Candidate/Candidate";
import CandidateAdd from "views/Candidate/CandidateAdd";
import CandidateEdit from "views/Candidate/CandidateEdit";

let dashboardRoutes = [

    {
        path: "/dashboard/dashboard",
        name: "Dashboard",
        admin: false,
        student: true,
        icon: "pe-7s-graph",
        component: Dashboard
    },
    {
        path: "/dashboard/user",
        name: "User Profile",
        admin: true,
        student: true,
        icon: "pe-7s-user",
        component: UserProfile
    },
    {
        path: "/dashboard/students",
        name: "Students",
        admin: true,
        icon: "pe-7s-note2",
        component: Student
    },
    {
        path: "/dashboard/candidates",
        name: "Candidates",
        admin: true,
        icon: "pe-7s-note2",
        component: Candidate
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
        path: "/dashboard/candidate-edit/:data",
        name: "Candidate Edit",
        admin: true,
        hidden: true,
        component: CandidateEdit
    },
    {
        path: "/dashboard/candidate-add",
        name: "Candidate Add",
        admin: true,
        hidden: true,
        component: CandidateAdd
    },
    {
        path: "/dashboard/election-session",
        name: "Election Session",
        admin: true,
        hidden: false,
        icon: "pe-7s-drawer",
        component: ElectionSession
    },
    {
        path: "/dashboard/votes",
        name: "Votes",
        admin: true,
        hidden: false,
        icon: "pe-7s-hammer",
        component: Vote
    },
    {
        path: "/dashboard/result",
        name: "Results",
        admin: true,
        hidden: false,
        icon: "pe-7s-hammer",
        component: Result
    },
    { redirect: true, path: "/", to: "/login", name: "Login Page" }
];

export default dashboardRoutes;
