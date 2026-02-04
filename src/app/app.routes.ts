import { Routes } from '@angular/router';
import { Home } from './pages/userportal/home/home';
import { Userhome } from './pages/userportal/userhome/userhome';
import { Login } from './pages/userportal/login/login';

export const routes: Routes = [
    {path: 'user/portal', component: Home, children: [
        {path: 'userhome', component: Userhome}
    ]},
    {path: 'user/portal/login', component: Login},
    {path: '**', redirectTo: 'user/portal/login', pathMatch: 'full'}
];
