import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { LikeButtonComponent } from './app/Components/like-button/like-button.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

createApplication(appConfig)
  .then((app) => {
    const LikeButton = createCustomElement(LikeButtonComponent, { injector: app.injector });
    customElements.define('like-button', LikeButton);
  })
  .catch((err) => console.error(err)); 