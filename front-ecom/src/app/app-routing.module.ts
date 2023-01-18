import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./pages/products/products.component";
import {CustomersComponent} from "./pages/customers/customers.component";
import {BillsComponent} from "./pages/bills/bills.component";
import {DetailsComponent} from "./pages/details/details.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path : "", redirectTo:"/home", pathMatch:"full"
  },
  {
    path : "home", component : HomeComponent
  },
  {
    path : "products", component : ProductsComponent
  },
  {
    path : "customers", component : CustomersComponent
  },
  {
    path : "bills/:customerID", component : BillsComponent
  },
  {
    path : "bill-details/:billID", component : DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
