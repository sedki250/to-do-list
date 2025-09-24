import { Injectable } from '@angular/core';
import { Tasks } from '../interface/tasks';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: any[] = [];

  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      let storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks);
      }
    }
  }

  deleteItems(i: number) {
    this.tasks.splice(i, 1);
    this.storageTask();
  }

  saveTask(title: any, desc: any) {
    this.tasks.push({ title, desc });
    this.storageTask();
  }

  updateItem(id: number, items: any) {
    this.tasks[id] = items;
    this.storageTask();
  }

  storageTask() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
