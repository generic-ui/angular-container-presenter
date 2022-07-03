import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserPresenterComponent } from './user/user-presenter.component';
import { UserContainerDirective } from './user/user-container.directive';
import { GuiListModule } from '@generic-ui/ngx-list';

@NgModule({
  declarations: [
    AppComponent,
    UserPresenterComponent,
    UserContainerDirective
  ],
  imports: [
    BrowserModule,
    GuiListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
