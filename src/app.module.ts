import { Module } from '@nestjs/common';
import { RootModule } from './modules/index.module';

@Module({
  imports: [RootModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
