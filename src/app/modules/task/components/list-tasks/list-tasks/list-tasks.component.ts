import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { TaskRepository } from 'src/app/core/repositories/task.repository';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskRepository: TaskRepository) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(): void {
    console.log(this.taskRepository);
    
    this.taskRepository.getTasks().subscribe({
      next: (tasks: Task[]) => {
        this.tasks = tasks;
      },
      error: (error) => {
        console.error('Error al cargar las tareas:', error);
      },
    });
  }
}
