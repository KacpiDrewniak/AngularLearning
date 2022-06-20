import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

const declarations = [
  AppComponent,
  HeaderComponent,
  ButtonComponent,
  TasksComponent,
  TaskItemComponent,
  AddTaskComponent,
];

const imports = [
  BrowserModule,
  AppRoutingModule,
  FontAwesomeModule,
  HttpClientModule,
  FormsModule,
  BrowserAnimationsModule,
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
];

const providers: Provider[] = [];

const bootstrap = [AppComponent];

@NgModule({
  declarations,
  imports: [
    imports,
    MatButtonModule,
    MatCardModule
  ],
  providers,
  bootstrap,
})
export class AppModule {}
