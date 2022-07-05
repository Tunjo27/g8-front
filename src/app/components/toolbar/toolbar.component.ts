import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog-ingreso/dialog.component';
import { DialogModificacionComponent } from '../dialog/dialog-modificacion/dialog-modificacion.component';
import { DialogSalidaModificacionComponent } from '../dialog/dialog-salida-modificacion/dialog-salida-modificacion.component';
import { DialogSalidaComponent } from '../dialog/dialog-salida/dialog-salida.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editDialog(): void {
    const dialogRef = this.dialog.open(DialogModificacionComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSalidaDialog(): void {
    const dialogRef = this.dialog.open(DialogSalidaComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editSalidaDialog(): void {
    const dialogRef = this.dialog.open(DialogSalidaModificacionComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
