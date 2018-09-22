export type Customer = {
  errorDetails: string,
  errorMsg: string,
  result: {
    addresses: {
      principalResidence: {
        addressType: number,
        latitude: number,
        longitude: number,
        municipality: string,
        postalCode: string,
        province: string,
        streetName: string,
        streetNumber: string,
        wardName: string
      }
    },
    age: number,
    birthDate: string,
    gender: string,
    givenName: string,
    habitationStatus: string,
    id: string,
    maidenName: string,
    maskedRelatedBankAccounts: {
      individual: [
        {
          accountId: string,
          branchNumber: string,
          maskedAccountNumber: string
        }
      ]
    },
    maskedRelatedCreditCardAccounts: {
      authorized: [
        {
          accountId: string,
          accountType: string,
          maskedAccountNumber: string
        }
      ]
    },
    occupationIndustry: string,
    otherName: string,
    relatedBankAccounts: {
      individual: [
        {
          accountId: string,
          accountNumber: string,
          branchNumber: string
        }
      ]
    },
    relatedCreditCardAccounts: {
      authorized: [
        {
          accountId: string,
          accountNumber: string,
          accountType: string
        }
      ]
    },
    relationshipStatus: string,
    schoolAttendance: string,
    schools: {},
    surname: string,
    totalIncome: number,
    type: string,
    workActivity: string
  },
  statusCode: number
}