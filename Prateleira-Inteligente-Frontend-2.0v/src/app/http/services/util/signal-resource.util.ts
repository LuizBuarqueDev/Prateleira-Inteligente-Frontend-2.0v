import { rxResource } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export function resourceFromObservable<T>(
  loader$: () => Observable<T>,
  defaultValue: T
) {
  return rxResource<T, void>({
    stream: () => loader$(),
    defaultValue,
  });
}