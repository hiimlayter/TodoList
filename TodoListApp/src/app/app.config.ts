import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { httpInterceptorInterceptor } from './interceptors/http-interceptor.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([httpInterceptorInterceptor]))]
};
