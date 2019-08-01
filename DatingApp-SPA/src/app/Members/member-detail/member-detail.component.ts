import { AlertifyService } from "./../../_services/alertify.service";
import { UserService } from "./../../_services/user.service";
import { User } from "src/app/_models/user";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-member-detail",
  templateUrl: "./member-detail.component.html",
  styleUrls: ["./member-detail.component.css"]
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  // members/{id}
  loadUser() {
    this.userService.getUser(+this.route.snapshot.params["id"]).subscribe(
      (user: User) => {
        this.user = user;
        console.log(user);
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
