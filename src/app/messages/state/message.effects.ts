import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as MessageActions from './message.actions';
import { Message } from '../message.model';

@Injectable()
export class MessageEffects {
  constructor(private actions$: Actions, private firestore: Firestore) {}

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.loadMessages),
      mergeMap(() =>
        collectionData(collection(this.firestore, 'messages'), { idField: 'id' }).pipe(
          map(messages => MessageActions.loadMessagesSuccess({ messages })),
          catchError(error => of(MessageActions.loadMessagesFailure({ error: error.message })))
        )
      )
    )
  );

  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.addMessage),
      mergeMap(({ message }) =>
        addDoc(collection(this.firestore, 'messages'), { ...message, createdAt: Date.now() }).then(() =>
          MessageActions.addMessageSuccess({ message })
        ).catch(error => MessageActions.addMessageFailure({ error: error.message }))
      )
    )
  );
}
