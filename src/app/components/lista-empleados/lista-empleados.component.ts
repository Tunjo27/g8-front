import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoServiceService } from '../../services/empleado-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  id: number;
  cargo: string;
  fechaIngreso: string;
  fechaSalida: string;
  empleado: Empleado;
  empleados?: Empleado[];

  constructor(private empleadoService: EmpleadoServiceService, public dialog: MatDialog,
    private route: ActivatedRoute,
      private router: Router) {
    this.id = 0;
    this.cargo = '';
    this.fechaIngreso = '';
    this.fechaSalida = '';
    this.empleado = new Empleado();
  }

  ngOnInit() {
    this.empleadoService.findAllEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  buscarCargo(){
    console.log(this.cargo);
    this.empleadoService.filtrarPorCargo(this.cargo).subscribe(data => {
      this.empleados = data;
    });
  }

  buscarFechaIngreso(){
    console.log(this.fechaIngreso);
    this.empleadoService.filtrarPorFechaIngreso(this.fechaIngreso).subscribe(data => {
      this.empleados = data;
    });
  }

  buscarFechaSalida(){
    console.log(this.fechaIngreso);
    this.empleadoService.filtrarPorFechaSalida(this.fechaSalida).subscribe(data => {
      this.empleados = data;
    });
  }

  eliminarEmpleado() {
    console.log(this.id);
    this.empleadoService.borrarEmpleado(this.id).subscribe(data => {
      this.empleado = data;
    });
  }

}
