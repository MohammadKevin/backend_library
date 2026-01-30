export type Return = {
  id: number;
  loanId: number;
  returnDate: Date;
};

export type CreateReturnDto = Omit<Return, 'id'>;
