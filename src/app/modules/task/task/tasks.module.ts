import { NgModule } from '@angular/core';
import { ListTasksComponent } from '../components/list-tasks/list-tasks/list-tasks.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskRepository } from 'src/app/core/repositories/task.repository';
import { TaskRepositoryImpl } from 'src/app/infrastructure/repositories/task.repository.impl';

@NgModule({
  declarations: [ListTasksComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [{ provide: TaskRepository, useClass: TaskRepositoryImpl }],
})
export class TasksModule {}
