import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { PrometheusModule } from './prometheus/prometheus.module';
config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './SQLite/db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    PrometheusModule,
  ],
})
export class AppModule {}
