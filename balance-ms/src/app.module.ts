import { Module } from '@nestjs/common';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';
import { KnexModule } from 'nest-knexjs';
import { BalanceRepository } from './balance.repository';

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'mysql2',
          connection: {
            host: 'mysqlbalance',
            port: 3306,
            database: 'balance',
            user: 'root',
            password: 'root',
            supportBigNumbers: true,
            bigNumberStrings: true,
            multipleStatements: true,
            dateStrings: true,
          },
          pool: {
            min: 2,
            max: 10,
          },
        },
      }),
    }),
  ],
  controllers: [BalanceController],
  providers: [BalanceService, BalanceRepository],
})
export class AppModule {}
