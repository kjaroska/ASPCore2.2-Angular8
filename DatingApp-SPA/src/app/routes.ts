import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberDetailComponent } from "./Members/member-detail/member-detail.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MessagesComponent } from "./messages/messages.component";
import { MemberListComponent } from "./Members/member-list/member-list.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { ListsComponent } from "./lists/lists.component";

export const appRoutes: Routes = [
  // Sequence is important!
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "members", component: MemberListComponent },
      {
        path: "members/:id",
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      }, // route parameter
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent }
    ]
  },

  { path: "**", redirectTo: "", pathMatch: "full" }
];
