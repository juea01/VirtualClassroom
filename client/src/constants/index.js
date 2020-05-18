import AdminHomePage from "../container/AdminHomepage";
import StudentBoard from "../container/StudentBoard";
import TeacherBoard from "../container/TeacherBoard";
export const ADMIN_ROUTES = [
  { path: "/admin", name: "Admin Page", exact: true, component: AdminHomePage },
];

export const STUDENT_ROUTES = [
  {
    path: "/student",
    name: "Student Board",
    exact: true,
    component: StudentBoard,
  },
];

export const TEACHER_ROUTES = [
  {
    path: "/teacher",
    name: "Teacher Board",
    exact: true,
    component: TeacherBoard,
  },
];
