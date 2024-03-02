import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('balances').del();

  // Inserts seed entries
  await knex('balances').insert([
    {
      id: '54f548aa-8cbf-4b96-8aaa-b6b9db48ccfe',
      accountId: 'f0575e99-4e25-4066-9f26-90ac31563683',
      balance: '38',
    },
    {
      id: '5c775dce-b742-44bf-a855-40d38955bf5d',
      accountId: 'bb903385-ac7c-45ee-a301-8a9a8efda508',
      balance: '0',
    },
  ]);
}
