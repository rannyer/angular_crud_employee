import { Component, OnInit } from '@angular/core';
import { ModelComponent } from "../shared/ui/model/model.component";
import { employeeFormComponent } from "../employee-form/employee-form.component";
import { Employee } from '../shared/models/Employee';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';

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

  employee!: Employee

  constructor(private employeeService: EmployeeService, private toastService: ToastrService) {}

  ngOnInit(): void {
   this.getAllEmployee()
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe({
      next:(response) =>{
        console.log(response)
        this.employees = response
      }
    })
  }


  deleteEmployee(id?:string){
    this.employeeService.deleteEmployee(id).subscribe({
      next:(response) =>{
        console.log(response)
        this.toastService.success("Funcionario Deletado Com Sucesso")
        this.getAllEmployee()
      }
    })
  }

  loadEmployee(employee:Employee){
    this.employee = employee
    this.openModel()
  }
  openModel(){
    this.isModelOpen = true
  }

  closeModel(){
    this.isModelOpen = false
    this.getAllEmployee()
  }

 
}
