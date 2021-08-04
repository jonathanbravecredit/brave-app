import { IMergeReport, IBorrower, ICreditStatement } from "@shared/interfaces";

export class MergeReportPipeHelper {
  constructor() { }

  static addCustomerStatementToArrOfObj(objArr: any[], report: IMergeReport): any[] {
    let statement = '';
    const borrower = report.TrueLinkCreditReportType.Borrower;
    if (borrower !== undefined) {
      const statementStract = MergeReportPipeHelper.parseBorrowerForCreditStatement(borrower);
      if (statementStract !== undefined) {
        statement = statementStract;
      }
    }

    const modifiedArr = objArr.map((obj) => {
      obj.accountDetail.consumerStatement = statement;
      return objArr;
    });

    return modifiedArr;
  }

  static parseBorrowerForCreditStatement(borrower: IBorrower | IBorrower[]) {
    return borrower instanceof Array ?
    this.parseCreditStatement(borrower[0].CreditStatement) :
    this.parseCreditStatement(borrower.CreditStatement)
  }

  static parseCreditStatement(creditStatementVariant: ICreditStatement[] | ICreditStatement | undefined): string | undefined {
    if (creditStatementVariant !== undefined) {
      return creditStatementVariant instanceof Array ? creditStatementVariant[1]?.statement : creditStatementVariant?.statement;
    }
  }

}