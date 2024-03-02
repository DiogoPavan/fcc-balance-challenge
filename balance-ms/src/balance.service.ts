/* eslint-disable prettier/prettier */
import { UpdateBalanceDto } from './balance.dto';
import { BalanceRepository } from './balance.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BalanceService {
  constructor(private readonly balanceRepository: BalanceRepository) {}

  getBalance(accountId: string): Promise<any> {
    return this.balanceRepository.findByAccountId(accountId);
  }

  async updateBalance(updateBalance: UpdateBalanceDto): Promise<void> {
    const { accountFrom, accountTo } = updateBalance;

    const balanceAccountFrom = await this.balanceRepository.findByAccountId(accountFrom.id);

    if (balanceAccountFrom) {
      await this.balanceRepository.updateByAccountId(accountFrom.id, accountFrom.balance);
    } else {
      await this.balanceRepository.insertBalanceAccount({
        accountId: accountFrom.id,
        balance: accountFrom.balance,
      });
    }

    const balanceAccountTo = await this.balanceRepository.findByAccountId(accountTo.id);

    if (balanceAccountTo) {
      await this.balanceRepository.updateByAccountId(accountTo.id, accountTo.balance);
    } else {
      await this.balanceRepository.insertBalanceAccount({
        accountId: accountTo.id,
        balance: accountTo.balance,
      });
    }
  }
}
