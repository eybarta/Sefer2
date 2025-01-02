import { Module } from '@nestjs/common';
import { SefariaService } from './sefaria.service';
import { SefariaController } from './sefaria.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60 * 60 * 24, // 24 hours
      max: 100, // maximum number of items in cache
    }),
  ],
  providers: [SefariaService],
  controllers: [SefariaController],
  exports: [SefariaService],
})
export class SefariaModule {}