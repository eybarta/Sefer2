import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SefariaModule } from './sefaria/sefaria.module';
import { ScriptureModule } from './scripture/scripture.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    SefariaModule,
    ScriptureModule,
  ],
})
export class AppModule {}