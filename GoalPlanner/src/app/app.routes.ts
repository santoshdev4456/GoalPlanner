import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { RemindersComponent } from './reminders/reminders.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component: HomeComponent
    },{
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path : 'goals',
        component: GoalListComponent
    },{
        path: 'tasks',
        component: TaskListComponent
    },{
        path: 'reminders',
        component: RemindersComponent
    }
];
