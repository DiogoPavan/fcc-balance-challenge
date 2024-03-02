import { Controller, Get, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

type BalancesMessage = {
  Payload: {
    account_id_from: string;
    account_id_to: string;
    balance_account_id_from: number;
    balance_account_id_to: number;
  };
};

@Controller('balances')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':accountId')
  getBalance(@Param('accountId') accountId: string): Promise<any> {
    return this.balanceService.getBalance(accountId);
  }

  @MessagePattern('balances')
  async consumerBalances(@Payload() message: BalancesMessage): Promise<void> {
    const { Payload: data } = message;
    console.log('CONSUMER', {
      accountFrom: {
        id: data.account_id_from,
        balance: String(data.balance_account_id_from),
      },
      accountTo: {
        id: data.account_id_to,
        balance: String(data.balance_account_id_to),
      },
    });
    this.balanceService.updateBalance({
      accountFrom: {
        id: data.account_id_from,
        balance: String(data.balance_account_id_from),
      },
      accountTo: {
        id: data.account_id_to,
        balance: String(data.balance_account_id_to),
      },
    });
  }
}
