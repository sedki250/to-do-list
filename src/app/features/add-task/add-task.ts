import { Component } from '@angular/core';
import { FlowbiteService } from '../../service/flowbite/flowbite-service';
import { initFlowbite } from 'flowbite';
import { Router, RouterLink } from '@angular/router';
import { TasksService } from '../../service/tasks-service';


@Component({
  selector: 'app-add-task',
  imports: [RouterLink],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask {
title: any;
desc: any;
currentYear: any;
constructor(private flowbiteService: FlowbiteService,private taskService:TasksService,private router:Router) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
  saveTask(title:any,desc:any){
    this.taskService.saveTask(title.value,desc.value)
    this.router.navigate(['/'])
    
  }
}
