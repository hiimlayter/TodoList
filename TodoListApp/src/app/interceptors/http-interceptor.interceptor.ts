import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  var request = req.clone({
    withCredentials: true,
  });

  return next(request);
};
