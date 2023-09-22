import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// ng app should be bootstrapped with a module called AppModule 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
