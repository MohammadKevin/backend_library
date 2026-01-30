export type LoanDetail = {
  id: number;
  loanId: number;
  bookId: number;
  qty: number;
};

export type CreateLoanDetailDto = Omit<LoanDetail, 'id'>;
export type UpdateLoanDetailDto = Omit<LoanDetail, 'id'>;
