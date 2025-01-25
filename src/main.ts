import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
