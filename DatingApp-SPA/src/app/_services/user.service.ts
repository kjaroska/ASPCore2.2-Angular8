import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../_models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "users"); // specify for get() what is expected in return
  }

  getUser(userId): Observable<User> {
    return this.http.get<User>(this.baseUrl + "users/" + userId);
  }

  updateUser(userId: number, user: User) {
    return this.http.put(this.baseUrl + "users/" + userId, user);
  }

  setMainPhoto(userId: number, photoId: number) {
    return this.http.post(this.baseUrl + "users/" + userId + "/photos/" + photoId + "/setMain", {})
  }

  deletePhoto(userId: number, photoId: number) {
    debugger
    return this.http.delete(this.baseUrl + "users/" + userId + "/photos/" + photoId);
  }
}
