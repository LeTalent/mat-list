import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatListModule, MatCardModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
