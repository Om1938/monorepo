import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  AddListclickSource = new Subject();

  constructor(private readonly _http: HttpClient) {}
}
