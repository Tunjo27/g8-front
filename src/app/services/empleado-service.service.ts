import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable()
export class EmpleadoServiceService {

  private empleadosUrl: string;

  constructor(private http: HttpClient) {
    this.empleadosUrl = 'http://localhost:9091';
  }

  public guardarEmpleado(empleado: Empleado) {
    return this.http.post<Empleado>(this.empleadosUrl+'/add-empleado', empleado);
  }

  public findAllEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.empleadosUrl+'/find-all-empleados');
  }

  public filtrarPorCargo(cargo: string): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.empleadosUrl}/find-empleado/${cargo}`);
  }

  public filtrarPorRangosEdad(edad: number): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.empleadosUrl}/filtrar-empleado/${edad}`);
  }

  public filtrarPorFechaIngreso(fechaIngreso: string): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.empleadosUrl}/obtener-fecha-ingreso/${fechaIngreso}`);
  }

  public filtrarPorFechaSalida(fechaSalida: string): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.empleadosUrl}/obtener-fecha-salida/${fechaSalida}`);
  }

  public actualizarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.empleadosUrl}/update/${empleado.id}`, empleado);
  }

  public actualizarEmpleadoByFechaIngreso(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.empleadosUrl}/update-fecha-inicial/${empleado.id}`, empleado);
  }

  public actualizarEmpleadoByFechaSalida(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.empleadosUrl}/update-fecha-salida/${empleado.id}`, empleado);
  }

  public borrarEmpleado(id: number): Observable<Empleado> {
    return this.http.delete<Empleado>(`${this.empleadosUrl}/delete/${id}`);
  }

}
