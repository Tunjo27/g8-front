import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoServiceService } from 'src/app/services/empleado-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialog-modificacion',
  templateUrl: './dialog-modificacion.component.html',
  styleUrls: ['./dialog-modificacion.component.css']
})
export class DialogModificacionComponent {

  empleado: Empleado;

  idFormControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private empleadoService: EmpleadoServiceService,
          public dialogRef: MatDialogRef<DialogModificacionComponent>) {
    this.empleado = new Empleado();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.empleadoService.actualizarEmpleadoByFechaIngreso(this.empleado).subscribe(result => this.gotoEmpleadoList());
  }

  gotoEmpleadoList() {
    this.router.navigate(['/empleados']);
  }

}
