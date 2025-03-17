import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'message-crud';
  constructor(private route: Router) {

  }

  navigateToMessages() {
    this.route.navigate(['/messsages'])

  }
}
