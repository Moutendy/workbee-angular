import { inject, Injectable } from '@angular/core';
import { Firestore, collection, doc, getDocs, updateDoc } from '@angular/fire/firestore';
import { User, userConverter } from '../../../model/user';

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

    async updateUser(id: string, updatedUser: Partial<User>): Promise<void> {
    const userDoc = doc(this.firestore, `users/${id}`);
    await updateDoc(userDoc, updatedUser);
  }
}
