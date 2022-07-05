import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { EmpleadoFormComponent } from './components/agregar-empleado-form/empleado-form.component';
import { EditarEmpleadoFormComponent } from './components/editar-empleado-form/editar-empleado-form.component';
import { DialogComponent } from './components/dialog/dialog-ingreso/dialog.component';
import { DialogModificacionComponent } from './components/dialog/dialog-modificacion/dialog-modificacion.component';
import { DialogSalidaComponent } from './components/dialog/dialog-salida/dialog-salida.component';
import { DialogSalidaModificacionComponent } from './components/dialog/dialog-salida-modificacion/dialog-salida-modificacion.component';

const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'agregarEmpleado', component: EmpleadoFormComponent },
  { path: 'editarEmpleado', component: EditarEmpleadoFormComponent},
  { path: 'agregarFechaInicial', component: DialogComponent},
  { path: 'editarFechaInicial', component: DialogModificacionComponent},
  { path: 'agregarFechaSalida', component: DialogSalidaComponent},
  { path: 'editarFechaSalida', component: DialogSalidaModificacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
