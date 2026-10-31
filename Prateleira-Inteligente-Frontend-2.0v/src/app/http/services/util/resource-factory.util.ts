import { rxResource } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export abstract class ResourceFactory {
  protected createResource<T>(request: () => Observable<T>, defaultValue: T) {
    return rxResource<T, void>({
      stream: request,
      defaultValue,
    });
  }

  protected createParamResource<T, P>(
    params: () => P,
    request: (params: P) => Observable<T>,
    defaultValue: T,
  ) {
    return rxResource<T, P>({
      params,
      stream: ({ params }) => request(params),
      defaultValue,
    });
  }
}
