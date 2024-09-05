import { Component, OnInit } from '@angular/core';
import { ModelComponent } from "../shared/ui/model/model.component";
import { employeeFormComponent } from "../employee-form/employee-form.component";
import { Employee } from '../shared/models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ModelComponent, ModelComponent, employeeFormComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  isModelOpen = false;

  employees: Employee[] = []

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe({
      next:(response) =>{
        console.log(response)
        this.employees = response
      }
    })
  }

  openModel(){
    this.isModelOpen = true
  }

  closeModel(){
    this.isModelOpen = false
  }

 
}
