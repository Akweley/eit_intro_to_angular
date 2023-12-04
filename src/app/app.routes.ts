import { Routes } from '@angular/router';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { MyClassesComponent } from './main-features/my-classes/my-classes.component';
import { LeavesComponent } from './main-features/leaves/leaves.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { LeaveDetailComponent } from './main-features/leave-detail/leave-detail.component';
import { SettingsComponent } from './main-features/settings/settings.component';
import { AttendanceComponent } from './main-features/attendance/attendance.component';
import { ItSupportComponent } from './main-features/it-support/it-support.component';
import { AttendanceRegisterComponent } from './main-features/attendance-register/attendance-register.component';
import { AttendanceInnerComponent } from './main-features/attendance-inner/attendance-inner.component';
import { RequestsComponent } from './main-features/requests/requests.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'my-classes', component: MyClassesComponent},
    {path: 'leaves', component: LeavesComponent},
    {path: 'leaves/:id/:name', component: LeaveDetailComponent},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'user-detail', component: UserDetailComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'attendance-register', component: AttendanceRegisterComponent},
    {path:'attendance-inner/:id',component: AttendanceInnerComponent},
    {path: 'it-support', component: ItSupportComponent},
    {path: 'requests', component: RequestsComponent}
    
];
