
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../equator/src/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {


  constructor(
    private http: HttpClient,
  ) { }

  // getAll<T>(url: string, options?: any, isShowProgressBar: boolean = true): Observable<any> {
  //   url = this.generateUrl(url, options);
  //   var headers = this.setHeaders();

  //   return this.http
  //     .get(url, { headers: headers })

  // }

  getAll(url:string) : Observable<any>{
   url = this.generateUrl(url);
   return this.http.get<any>(url,{ responseType: 'json' as 'json' })
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${environment._baseUri}/api/registerUser`, userData);
  }

  login(login: any): Observable<any> {
    debugger
    return this.http.post(`${environment._baseUri}/api/login`, login);
  }


  postData(url: string, userData?: any): Observable<any> {
    debugger
     url = this.generateUrl(url);
    return this.http.post(url, userData)
  }

  get<T>(url: string, id: number | string | null = null): Observable<any> {


    var headers = this.setHeaders();

    url = this.generateUrl(url);

    if (id != null)
      url = url + "/" + id;

    return this.http
      .get(url, { headers: headers })
  }

  getParm<T>(url: string, data: any | [] | null = null): Observable<any> {

    let params = new HttpParams();
    Object.keys(data).forEach(key => { params = params.set(key, data[key]); });
    var headers = this.setHeaders();
    url = this.generateUrl(url);

    return this.http
      .get(url, { headers: headers, params: params })
  }

  post(url: string, data?: any): Observable<any> {
    var headers = this.setHeaders();
    withCredentials: true
    url = this.generateUrl(url);
    let body = JSON.stringify(data);

    return this.http.post(url, body, {
      headers: headers,
      withCredentials: true
    })
  }

  getByPayload(url: string, data?: any): Observable<any> {
    var headers = this.setHeaders();
    //console.log(url);
    withCredentials: true
    url = this.generateUrl(url);
    let body = JSON.stringify(data);

    return this.http.post(url, body, {
      headers: headers,
      withCredentials: true
    })
  }

  put(url: string, data?: any): Observable<any> {

    var headers = this.setHeaders();
    url = this.generateUrl(url);
    let body = JSON.stringify(data);
    return this.http.put(url, body, {
      headers: headers,
      withCredentials: true
    })
  }

  postWithFormData(url: string, data?: any): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'multipart/form-data');
    url = this.generateUrl(url);

    return this.http.post(url, data, {
      headers: headers,
      withCredentials: true
    })
  }
  
  postuploadFile(formData: FormData, ApiPath: any): Observable<any> {
    // No need to manually set 'Content-Type' here
    ApiPath = this.generateUrl(ApiPath);
    return this.http.post<any>(ApiPath, formData);
  }


  patch(url: string, data?: any): Observable<any> {

    var headers = this.setHeaders();
    url = this.generateUrl(url);
    let body = JSON.stringify(data);
    return this.http.patch(url, body, {
      headers: headers,
      withCredentials: true
    })
  }

  delete(url: string, id: number | string): Observable<any> {

    var headers = this.setHeaders();

    url = this.generateUrl(url);

    if (id != null)
      url = url + id;

    return this.http.delete(url, {
      headers: headers,
      withCredentials: true
    });
  }


  PreviewFileWithGet<T>(url: string, headerValue: any, accept: string): Observable<any> {
    var headers = this.setHeaders(undefined, false);
    url = this.generateUrl(url);
    headers = this.appendIntoHeader(headers, headerValue);
    const httpOptions = {
      headers: headers,
      Accept: accept,
    };
    return this.http
      .get(url, httpOptions)

  }
  downloadFileWithGet<T>(url: string, headerValue: any, accept: string): Observable<any> {
    var headers = this.setHeaders(undefined, false);
    url = this.generateUrl(url);
    headers = this.appendIntoHeader(headers, headerValue);
    const httpOptions = {
      headers: headers,
      responseType: 'blob' as 'json',
      Accept: accept,
    };
    return this.http
      .get(url, httpOptions)

  }


  private generateUrl(rawUrl: String, options?: any): string {

    //TODO   --->>>>     Manage according to multiple projects
    var url = environment._baseUri + rawUrl;

    if (options != null) {
      let params = new URLSearchParams();
      for (let key in options) {
        if (options[key] === null) {
        }
        else {
          params.set(key, options[key])
        }
      }
      url = url + "?" + params.toString();
    }

    return url
  }

  private setHeaders(params?: any, isIncludeJsonContentType: boolean = true, formData?: FormData): HttpHeaders {
    var headers = new HttpHeaders();

    if (isIncludeJsonContentType)
      headers = headers.set('Content-Type', 'application/json');
    return headers;
  }


  private appendIntoHeader(existingHeader: any, appendValue: any): HttpHeaders {
    if (appendValue != null) {
      Object.getOwnPropertyNames(appendValue).forEach(element => {
        if (appendValue[element] === null) {

        }
        else {
          existingHeader = existingHeader.set(element, appendValue[element]);
        }
      });
    }

    return existingHeader;
  }

  getAsPromise(url: string, id: string): Promise<any> {
    url = this.generateUrl(url);

    return this.http
      .get(url)
      .toPromise();
  }
  headerFileHttpOptions = {
    headers: new HttpHeaders({
      'IsUploadCode': 'true'
    })
  }
  async postWithFile(url: string, data?: any): Promise<Observable<any>> {
    try {
      var url1 = environment._baseUri + url;
      //const url = this.getRequestBaseUrl(project) + apiPath;
      const response = await this.http.post<any>(url1, data, this.headerFileHttpOptions).pipe(
        retry(0),
        catchError((error) => this.handleError(error))
      ).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}