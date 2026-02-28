import { rxResource } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Signal } from '@angular/core';

export function resourceFromObservable<T, R>(
  request: Signal<R>,
  stream$: (req: R) => Observable<T>,
  defaultValue: T,
) {
  return rxResource<T, void>({
    stream: () => stream$(request()), // <- lê o signal aqui
    defaultValue,
  });
}
