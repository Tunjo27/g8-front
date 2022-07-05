import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { EmpleadoServiceService } from '../../services/empleado-service.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-editar-empleado-form',
  templateUrl: './editar-empleado-form.component.html',
  styleUrls: ['./editar-empleado-form.component.css']
})
export class EditarEmpleadoFormComponent {

  empleado: Empleado;

  idFormControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  nombresFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]/)]);
  apellidosFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]/)]);
  edadFormControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  cargoFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]/)]);
  numeroCelularFormControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private empleadoService: EmpleadoServiceService) {
      this.empleado = new Empleado();
  }

  onSubmit() {
    this.empleadoService.actualizarEmpleado(this.empleado).subscribe(result => this.gotoEmpleadoList());
  }

  gotoEmpleadoList() {
    this.router.navigate(['/empleados']);
  }

}
