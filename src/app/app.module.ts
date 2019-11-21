import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompAComponent } from './comp-a/comp-a.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule,MatInputModule } from '@angular/material'
import { RecordsService } from './records.service';
import { CompBComponent } from './comp-b/comp-b.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
