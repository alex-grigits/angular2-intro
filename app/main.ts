// main.ts - импортирует основной модуль приложения и запускает его

// Импорт платформы, на которой будет работать приложение
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Импорт основного модуля приложения
import { AppModule } from './app.module';

// Создаем платформу и отправляем в нее модуль приложения, после чего приложение запускается
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
