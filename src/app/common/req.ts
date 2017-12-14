/**
 * Created by LG0812 on 2017/10/30.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class Req {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'at': '',
    'ht': ''
  });

  constructor(private http: Http) {
    console.log(http);
  }

  get(url, params) {
    this.headers.set('at', sessionStorage.getItem('at'));
    this.headers.set('ht', sessionStorage.getItem('ht'));
    this.headers.set('Content-Type', 'application/json');
    let queryString = '?';
    if (params) {
      for (const p in params) {
        queryString += p + '=' + params[p] + '&';
      }
    }
    return this.http.get(url + queryString, {headers: this.headers})
      .toPromise()
      .then(res => {
        // let data = response.json().data;
        const data = res.json();
        return data;
      }, (res) => this.handleError(res))
      .catch(this.handleError);
  }

  post(url, params) {
    this.headers.set('at', sessionStorage.getItem('at'));
    this.headers.set('ht', sessionStorage.getItem('ht'));
    this.headers.set('Content-Type', 'application/json');
    return this.http
      .post(url, JSON.stringify(params), {headers: this.headers})
      .toPromise()
      .then(res => {
        const data = res.json();
        return data;
      }, (res) => this.handleError(res))
      .catch(this.handleError);
  }


  postUpload(url, params) {
    this.headers.set('at', sessionStorage.getItem('at'));
    this.headers.set('ht', sessionStorage.getItem('ht'));
    this.headers.delete('Content-Type');
    return this.http
      .post(url, params, {headers: this.headers})
      .toPromise()
      .then(res => {
        const data = res.json();
        return data;
      }, (res) => this.handleError(res))
      .catch(this.handleError);
  }


  formatData(data) {
    let str = '';
    for (const key in data) {
      str = str + key + '=' + data[key] + '&';
    }
    // 去掉最后一个 & 符号
    console.log('request params string:' + str);
    if (str) {
      return str.substring(0, str.length - 1);
    } else {
      return str;
    }
  }

  reqUtils(params) {
    fetch(params.path, {
      method: params.method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: this.formatData(params.data)
    }).then(data => {
      if (data.ok) {
        const d = data.json();
        console.log('>>>>>"', d)
        return d;
      } else {
        console.log('server error!');
      }
    }, e => console.log(e)).then(data => {
      params.success(data);
    });

  }

  reqFormUtils(params) {
    fetch(params.path, {
      method: params.method,
      mode: 'cors',
      body: params.data
    }).then(data => {
      if (data.ok) {
        const d = data.json();
        console.log('>>>>>', d)
        return d;
      } else {
        console.log('server error!');
      }
    }, e => console.log(e)).then(data => {
      params.success(data);
    });

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
