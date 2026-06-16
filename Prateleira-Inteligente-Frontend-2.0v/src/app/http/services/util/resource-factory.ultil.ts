import { resource } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

export abstract class ResourceFactory {
  protected createResource<T>(request: () => Observable<T>, defaultValue: T) {
    return resource<T, void>({
      loader: () => firstValueFrom(request()),
      defaultValue,
    });
  }
}
