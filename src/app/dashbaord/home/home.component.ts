import { Component, inject, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/user/userservice.service';
import { User } from '../../../model/user';
import { TypeserviceService } from '../../service/user/typeservice.service';
import { Type } from '../../../model/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  userService = inject(UserserviceService);
  typeService = inject(TypeserviceService);
  allUsers: User[] = [];
  allTypes: Type[] = [];
  ngOnInit(): void {
    // Code à exécuter lors de l'initialisation du composant
    this.typeService.getTypes().then((response) => {
      this.allTypes = response.filter((type) => type.name !== 'LIVREUR');
    });
    this.userService.getUsers().then((response) => {

      this.allUsers = response.filter((user) => this.allTypes.map(type => type.id).includes(user.typeId));
    });

  }
  update(user: User) {
    user.isAcount = !user.isAcount;
    this.userService.updateUser(user.id, user);
  }


}
