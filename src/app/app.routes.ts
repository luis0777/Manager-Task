import { Routes } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TelaTaskComponent } from './tela-task/tela-task.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'view',
    component:  ViewTaskComponent
  },
  {
    path: 'task',
    component: TelaTaskComponent
  },

];
