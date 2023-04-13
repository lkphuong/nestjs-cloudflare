import { R2ConfigModule } from '@config/r2/r2.module';
import { LogModule } from './log/log.module';
import { SharedModule } from './shared/shared.module';

import { BucketService } from './r2/services/bucket/bucket.service';
import { ObjectService } from './r2/services/object/object.service';

import { BucketController } from './r2/controllers/bucket/bucket.controller';
import { ObjectController } from './r2/controllers/object/object.controller';

export const modules = [R2ConfigModule, LogModule, SharedModule];

export const controllers = [BucketController, ObjectController];

export const providers = [BucketService, ObjectService];
