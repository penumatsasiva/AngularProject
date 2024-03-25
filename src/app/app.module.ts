import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AtdDirective } from './atd.directive';
import { StdDirective } from './std.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SibilingComponent } from './sibiling/sibiling.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SubChildComponent } from './sub-child/sub-child.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { GteDirective } from './gte.directive';
import { UppercasePipe } from './uppercase.pipe';
import { DynamiClassDirective } from './dynami-class.directive';
import { LoadIfDirective } from './load-if.directive';
import { ToggleDirective } from './toggle.directive';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AtdDirective,
    StdDirective,
    SibilingComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    SubChildComponent,
    GteDirective,
    UppercasePipe,
    DynamiClassDirective,
    LoadIfDirective,
    ToggleDirective
  ],
  imports: [
    BrowserModule,
    NgSelectModule, FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
