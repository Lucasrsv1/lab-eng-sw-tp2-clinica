import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { BlockUIModule } from "ng-block-ui";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgSelectModule } from "@ng-select/ng-select";
import { TextMaskModule } from "angular2-text-mask";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";

import { RequestInterceptor } from "./services/authentication/request.interceptor";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		BlockUIModule,
		NgSelectModule,
		TextMaskModule,
		ComponentsModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
