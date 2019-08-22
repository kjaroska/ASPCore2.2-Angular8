import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../_models/user";
import { PaginatedResult } from "../_models/pagination";

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(page?, itemsPerPage?, userParams?): Observable<PaginatedResult<User[]>> {
    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<
      User[]
    >();
    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append("pageNumber", page);
      params = params.append("pageSize", itemsPerPage);
    }

    if (userParams != null) {
      params = params.append("minAge", userParams.minAge);
      params = params.append("maxAge", userParams.maxAge);
      params = params.append("gender", userParams.gender);
      params = params.append("orderBy", userParams.orderBy);
    }

    return this.http
      .get<User[]>(this.baseUrl + "users", { observe: "response", params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get("Pagination") != null) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get("Pagination")
            );
          }

          return paginatedResult;
        })
      );
  }

  getUser(userId): Observable<User> {
    return this.http.get<User>(this.baseUrl + "users/" + userId);
  }

  updateUser(userId: number, user: User) {
    return this.http.put(this.baseUrl + "users/" + userId, user);
  }

  setMainPhoto(userId: number, photoId: number) {
    return this.http.post(
      this.baseUrl + "users/" + userId + "/photos/" + photoId + "/setMain",
      {}
    );
  }

  deletePhoto(userId: number, photoId: number) {
    return this.http.delete(
      this.baseUrl + "users/" + userId + "/photos/" + photoId
    );
  }

  sendLike(id: number, recipientId: number) {
    return this.http.post(this.baseUrl + "users/" + id + "/like/" + recipientId, {});
  }
}
