import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Documents } from '../Models/Documents';

@Injectable({
  providedIn: 'root'
})
export class SetuService {
  DocumentList !: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase, private firebasesStore: AngularFirestore) { }

  GetDocuments() {
    return this.firebasesStore.collection('Documents').valueChanges();
  }

  InsertDocuments(Doc: Documents) {
    return new Promise<any>((resolve, reject) => {
      this.firebasesStore.collection('Documents').add(Doc)
        .then(response => { console.log(response) }, error => reject(error))
    })
  }
}
