import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { Globals } from './globals';
// services
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { WeathercardComponent } from './weather/weathercard/weathercard.component';
import { AddCardComponent } from './add-card/add-card.component';
import { SvgComponent } from './svg/svg.component';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { WeatherDetailsComponent } from './weather/details/weather-details.component';
import { WeatherItemComponent } from './weather/item/weather-item.component';
import { WeatherListComponent } from './weather/list/weather-list.component';
import { AlertComponent } from './alert/alert.component';

// pipes
import { FahrenheitPipe } from './pipes/fahrenheit.pipe';
import { RemoveUnderscorePipe } from './pipes/removeUnderscore.pipe';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ClickOutsideDirective,
    WeathercardComponent,
    AddCardComponent,
    SvgComponent,
    SvgDefinitionsComponent,
    WeatherDetailsComponent,
    WeatherItemComponent,
    WeatherListComponent,
    AlertComponent,
    FahrenheitPipe,
    RemoveUnderscorePipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
      Globals,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
