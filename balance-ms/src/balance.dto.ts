export type BalanceDto = {
  accountId: string;
  balance: string;
};

export type UpdateBalanceDto = {
  accountFrom: {
    id: string;
    balance: string;
  };
  accountTo: {
    id: string;
    balance: string;
  };
};
