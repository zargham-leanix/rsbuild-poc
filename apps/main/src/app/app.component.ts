import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CoreUiComponent } from '@rsbuild-poc/core-ui';

@Component({
  imports: [NxWelcomeComponent, RouterModule, CoreUiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'main';
}
