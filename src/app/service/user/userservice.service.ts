import { inject, Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { userConverter } from '../../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  firestore = inject(Firestore);
  todosCollection = collection(this.firestore, 'users');
  async getUsers() {
     const usersCollection = this.todosCollection.withConverter(userConverter);

  const usersSnapshot = await getDocs(usersCollection);
  // Liste de User
  const users = usersSnapshot.docs.map(doc => doc.data());
  return users;
  }
}
