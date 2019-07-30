import { AuthGuard } from './_guards/auth.guard';
import { MessagesComponent } from "./messages/messages.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { ListsComponent } from './lists/lists.component';

export const appRoutes: Routes = [ // Sequence is important!
  { path: "home", component: HomeComponent },
  {
    path: "", runGuardsAndResolvers: "always", canActivate: [AuthGuard],
    children: [
      { path: "members", component: MemberListComponent},
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent },
    ]
  },

  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];
