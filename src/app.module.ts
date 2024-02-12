import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [LoginModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
