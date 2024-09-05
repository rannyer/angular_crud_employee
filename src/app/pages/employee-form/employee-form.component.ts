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

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ModelComponent],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class employeeFormComponent implements OnChanges {
  @Output() onCloseModel = new EventEmitter()


  employeeForm: FormGroup

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
   this.employeeForm = this.fb.group({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    mobile: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    doj: new FormControl('',[Validators.required])
   })
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  onClose() {
    this.onCloseModel.emit(false)
  }

  onSubmit(){
    if (this.employeeForm.valid){
      this.employeeService.createEmployee(this.employeeForm.value).subscribe({
        next:(response) =>{
          alert('Funcionario Criado com Sucesso!')
          this.onClose()
        }
      })
    }else{
      this.employeeForm.markAllAsTouched()
    }
  }
 

}
