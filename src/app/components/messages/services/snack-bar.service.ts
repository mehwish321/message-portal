import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',  // Ensure this is provided globally
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(message: string, action: string = 'Close') {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
