import { resource } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

export function resourceFromObservable<T>(loader$: () => Observable<T>, defaultValue: T) {
  return resource<T, void>({
    loader: async () => firstValueFrom(loader$()),
    defaultValue,
  });
}
