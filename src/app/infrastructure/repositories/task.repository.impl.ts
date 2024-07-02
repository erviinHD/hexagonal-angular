import { Injectable } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { TaskRepository } from '../../core/repositories/task.repository';
import { TaskService } from '../../infrastructure/services/task/task.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryImpl implements TaskRepository {
  constructor(private taskService: TaskService) {}

  getTasks(): Observable<Task[]> {
    return this.taskService.getTasks();
  }

  addTask(task: Task): Observable<Task> {
    return this.taskService.addTask(task);
  }

  updateTask(task: Task): Observable<void> {
    return this.taskService.updateTask(task);
  }

  deleteTask(id: number): Observable<void> {
    return this.taskService.deleteTask(id);
  }
}
