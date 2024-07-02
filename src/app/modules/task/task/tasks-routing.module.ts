import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from '../components/list-tasks/list-tasks/list-tasks.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'task', component: ListTasksComponent },
      { path: '**', redirectTo: 'task' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
