/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { BalanceDto } from './balance.dto';

@Injectable()
export class BalanceRepository {
  constructor(
    @InjectConnection()
    private readonly knex: Knex,
  ) {}

  async findByAccountId(accountId: string): Promise<BalanceDto | null> {
    console.log('findByAccountId:', accountId);
    const balanceAccount = await this.knex.table('balances').select('*').where({ accountId }).first();

    return balanceAccount ? {
      accountId,
      balance: balanceAccount.balance,
    } : null;
  }

  async insertBalanceAccount(balanceAccount: BalanceDto) {
    await this.knex.table('balances').insert({
      id: uuidv4(),
      accountId: balanceAccount.accountId,
      balance: balanceAccount.balance,
    })
  }

  async updateByAccountId(accountId: string, balance: string): Promise<void> {
    await this.knex.table('balances')
      .where({
        accountId,
      })
      .update({
        balance,
      });
  }
}
