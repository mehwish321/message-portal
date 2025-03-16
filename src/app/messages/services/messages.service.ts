import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, deleteDoc, doc, orderBy, DocumentData, CollectionReference, Timestamp } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(public firestore: Firestore) {}
  

  getMessages(): Observable<Message[]> {
    const messagesCollection: any = collection(this.firestore, 'messages') as CollectionReference<DocumentData>;
    const messagesQuery: any = query(messagesCollection, orderBy('timestamp', 'asc')); // Order by timestamp
    return collectionData(messagesQuery, { idField: 'id' }) as Observable<Message[]>; // Fetch data as Observable
  
  }

  async addMessage(message: Message) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'messages'), {
        ...message,
        timestamp: Timestamp.now(),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  async deleteMessage(messageId: string): Promise<void> {
    const messageDocRef = doc(this.firestore, `messages/${messageId}`);
    await deleteDoc(messageDocRef);
  }
}
