import { NgModule } from "@angular/core";
import {
	BrowserModule,
	provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { NavbarComponent } from "./navbar/navbar.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { HomeComponent } from "./home/home.component";
import { SaveForLaterComponent } from "./save-for-later/save-for-later.component";
import { AccountComponent } from "./account/account.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { ProductStoresComponent } from './product-stores/product-stores.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		SaveForLaterComponent,
		AccountComponent,
		ProductStoresComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatGridListModule,
		ReactiveFormsModule,
		FormsModule,
		MatMenuModule,
		MatTableModule
	],
	providers: [provideClientHydration(), provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
