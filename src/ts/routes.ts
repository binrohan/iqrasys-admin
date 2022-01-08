import dashboard from "./components/pages/dashboard/dashboard";
import userManagement from "./components/pages/user-management/component";

export const routes = [
    {name: 'Dashboard', path: '/', component: dashboard},
    {name: 'User Management', path: '/user-management', component: userManagement},
    {name: 'Dashboard', path: '/messages', component: userManagement},
    {name: 'Dashboard', path: '/demo-requests', component: userManagement},
    {name: 'Dashboard', path: '/quick-requests', component: userManagement},
    {name: 'Dashboard', path: '/job-applications', component: userManagement},
    {name: 'Dashboard', path: '/solutions', component: userManagement}
]

