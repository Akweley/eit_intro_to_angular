import { Routes } from '@angular/router';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { MyClassesComponent } from './main-features/my-classes/my-classes.component';
import { LeaveComponent } from './main-features/leave/leave.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'my-classes', component: MyClassesComponent},
    {path: 'leave', component: LeaveComponent},
    {path: 'analytics', component: AnalyticsComponent},
    
];
