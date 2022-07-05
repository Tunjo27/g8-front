import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog-ingreso/dialog.component';
import { DialogModificacionComponent } from './components/dialog/dialog-modificacion/dialog-modificacion.component';
import { DialogSalidaComponent } from './components/dialog/dialog-salida/dialog-salida.component';
import { DialogSalidaModificacionComponent } from './components/dialog/dialog-salida-modificacion/dialog-salida-modificacion.component';
import { EditarEmpleadoFormComponent } from './components/editar-empleado-form/editar-empleado-form.component';
import { EmpleadoFormComponent } from './components/agregar-empleado-form/empleado-form.component';
import { EmpleadoServiceService } from './services/empleado-service.service';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogModificacionComponent,
    DialogSalidaComponent,
    DialogSalidaModificacionComponent,
    EditarEmpleadoFormComponent,
    EmpleadoFormComponent,
    ListaEmpleadosComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule 
  ],
  providers: [EmpleadoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
