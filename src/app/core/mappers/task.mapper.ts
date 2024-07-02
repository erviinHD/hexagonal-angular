import { TaskDTO } from '../../infrastructure/dto/task.dto';

import { Task } from '../models/task.model';

export class TaskMapper {
 static fromApiToDomain(apiTask: TaskDTO): Task {
   return {
     id: apiTask.id,
     description: apiTask.description,
     completed: apiTask.completed,
   };
 }

 static fromDomainToApi(domainTask: Task): TaskDTO {
   return {
     id: domainTask.id,
     description: domainTask.description,
     completed: domainTask.completed,
   };
 }
}
