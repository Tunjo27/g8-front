import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { EmpleadoServiceService } from 'src/app/services/empleado-service.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  
  empleado: Empleado;
  
  idFormControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private empleadoService: EmpleadoServiceService,
          public dialogRef: MatDialogRef<DialogComponent>) {
    this.empleado = new Empleado();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    this.empleadoService.actualizarEmpleadoByFechaIngreso(this.empleado).subscribe(result => this.gotoEmpleadoList());
  }

  gotoEmpleadoList(){
    this.router.navigate(['/empleados']);
  }

}
