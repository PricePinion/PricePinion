import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SaveForLaterComponent } from "./save-for-later/save-for-later.component";
import { AccountComponent } from "./account/account.component";
import { ProductStoresComponent } from './product-stores/product-stores.component';

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "Home", component: HomeComponent },
	{ path: "SFL", component: SaveForLaterComponent },
	{ path: "Account", component: AccountComponent },
	{ path: 'Product-Stores/:productID', component: ProductStoresComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
