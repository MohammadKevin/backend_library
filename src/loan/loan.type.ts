export type Loan = {
  id: number;
  bookId: number;
  memberId: number;
  loanDate: Date;
  returnDate: Date;
};

export type CreateLoanDto = Omit<Loan, 'id'>;
