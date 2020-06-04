import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpError } from "../Models/http-error";

export class ErrorInerceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout();
                // location.reload(true);
            }
            let error = new HttpError(err.error.message || err.statusText , err.status);
            return throwError(error);
        }))
    }
}
