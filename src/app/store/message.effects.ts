import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure } from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MessagesService } from '../components/messages/services/messages.service';

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessagesService
  ) {
  }

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMessages),
      mergeMap(() =>
        this.messageService.getMessages().pipe(
          map((messages) => loadMessagesSuccess({ messages })),
          catchError((error) => of(loadMessagesFailure({ error: error.message })))
        )
      )
    )
  );
}
