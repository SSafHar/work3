import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { APP_LOGO_CONFIG, AppLogoConfig } from './shared/logo/logo.component';
import { SharedModule } from './shared/shared.module';

const logoConfig = {
  name: 'Cerberus',
  imageUrl: '../assets/images/angular.png'
} as AppLogoConfig;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cerberus-website'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
    ServicesModule
  ],
  providers: [
    {provide: APP_LOGO_CONFIG, useValue: logoConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
