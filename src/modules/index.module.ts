import { Module } from '@nestjs/common';

import { controllers, modules, providers } from './index.imports';

@Module({
  imports: modules,
  controllers: controllers,
  providers: providers,
})
export class RootModule {}
