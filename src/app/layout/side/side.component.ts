import { Component, inject } from '@angular/core';
import { MenuService } from '../../service/menuservice/menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side',

  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
 router = inject(Router);
   logout(): void {
    // Ajoutez ici votre logique de déconnexion
    this.router.navigate(['/login']);

  }

    redirect(url:string): void {
    // Ajoutez ici votre logique de déconnexion
    this.router.navigate([url]);

  }
}
