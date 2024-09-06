import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModelComponent } from '../shared/ui/model/model.component';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../shared/models/Employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ModelComponent],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class employeeFormComponent implements OnChanges {
  @Output() onCloseModel = new EventEmitter()
  @Input() data: Employee | null = null

  employeeForm: FormGroup

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private toast:ToastrService) {
    this.employeeForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      doj: new FormControl('', [Validators.required])
    })
  }

  ngOnChanges(): void {
    if (this.data) {
      this.employeeForm.patchValue(this.data)
    }
  }

  onClose() {
    this.onCloseModel.emit(false)
    this.data = null
    this.employeeForm.reset()
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.data) {
        this.employeeService.updateEmployee(this.data.id as string, this.employeeForm.value)
        .subscribe({
          next:() =>{
            this.toast.success("Funcionario Atualizado")
            this.onClose()
          }
        })       
      }else{
        this.employeeService.createEmployee(this.employeeForm.value).subscribe({
          next: () => {
            this.toast.success("Funcionario Criado com Sucesso!")
            this.onClose()
          }
        })
      }
    } else {
      this.employeeForm.markAllAsTouched()
    }
    
  }


}
