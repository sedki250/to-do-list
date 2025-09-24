import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TasksService } from '../../service/tasks-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task.html',
  styleUrl: './task.scss',
  standalone:true,
 
 
})
export class Task implements OnInit{
  taskName: string = '';
  taskId:any;
  task:any;

  private router = inject(Router)
private route=inject(ActivatedRoute)
private taskService=inject(TasksService)
currentYear: any;
title: any;
ngOnInit(): void {
    this.taskId=this.route.snapshot.paramMap.get('id')
    this.task=this.taskService.tasks[this.taskId]
}
updateTask(){
  this.taskService.updateItem(this.taskId,this.task)
  this.router.navigate(['/'])
}
deleteTask(){
  this.taskService.deleteItems(this.taskId)
  this.router.navigate(['/'])
}
}
