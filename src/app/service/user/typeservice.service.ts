import { inject, Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { typeConverter } from '../../../model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeserviceService {
  firestore = inject(Firestore);
  todosCollection = collection(this.firestore, 'type');
  async getTypes() {
     const typesCollection = this.todosCollection.withConverter(typeConverter);

  const typesSnapshot = await getDocs(typesCollection);
  // Liste de Type
  const types = typesSnapshot.docs.map(doc => doc.data());
  return types;
  }
}
