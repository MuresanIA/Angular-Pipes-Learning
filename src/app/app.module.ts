import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileSizePipe } from './filesize.pipe';

@NgModule({
  declarations: [AppComponent, FileSizePipe],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
