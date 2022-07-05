import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoServiceService } from 'src/app/services/empleado-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialog-salida-modificacion',
  templateUrl: './dialog-salida-modificacion.component.html',
  styleUrls: ['./dialog-salida-modificacion.component.css']
})
export class DialogSalidaModificacionComponent {

  empleado: Empleado;

  myMoment:  string = moment().format('D MMM YYYY HH:mm:ss');

  idFormControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  
  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private empleadoService: EmpleadoServiceService,
   	  public dialogRef: MatDialogRef<DialogSalidaModificacionComponent>) {
    this.empleado = new Empleado();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.empleadoService.actualizarEmpleadoByFechaSalida(this.empleado).subscribe(result => this.gotoEmpleadoList());
  }

  gotoEmpleadoList() {
    this.router.navigate(['/empleados']);
  }

}

