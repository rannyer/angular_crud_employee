import { Component, OnInit } from '@angular/core';
import { ModelComponent } from "../shared/ui/model/model.component";
import { employeeFormComponent } from "../employee-form/employee-form.component";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ModelComponent, ModelComponent, employeeFormComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  isModelOpen = false;

  constructor(
  
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openModel(){
    this.isModelOpen = true
  }

  closeModel(){
    this.isModelOpen = false
  }

 
}
