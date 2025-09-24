
import { Component, inject } from '@angular/core';
import { TasksService } from '../../service/tasks-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
currentYear: any;
taskId: any;
  
constructor(public _tasksService:TasksService ){
  
}

delete(i:number){
this._tasksService.deleteItems(i)
}
}
