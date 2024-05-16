import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ProductService} from './product-proxy.service';
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"; //account menu display

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { ProductStoresComponent } from './product-stores/product-stores.component';
import { SaveForLaterComponent } from "./save-for-later/save-for-later.component";
import { AccountComponent } from "./account/account.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from '@angular/material/table';

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";


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
		MatTableModule,
		HttpClientModule
	],
	providers: [ provideAnimationsAsync(), ProductService],
	bootstrap: [AppComponent],
})
export class AppModule {}
