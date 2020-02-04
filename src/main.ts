import { platformBrowserDynamic } from 'angular-ts-decorators';
import { AppModule } from './app/app.module';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

platformBrowserDynamic().bootstrapModule(AppModule);