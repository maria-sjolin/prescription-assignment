export type Prescription = {
  article: {
    id: string,
    productName: string,
    productLongName: string,
    preamble: string,
    stock: number | null,
    stockStatus: string,
    pharmaceuticalForm: string | null,
    packagingText: string,
    originalUnitPrice: number,
    activeSubstance: string,
    strength: string | null,
    articleLink: string | null
  },
  prescriber: {
    name: string | null,
    workplace: string | null,
    profession: string | null,
    phoneNumber: string | null,
  },
  validityDate: string,
  isAboutToExpire: boolean
};

export enum StockStatus {
  InStock = 'InStock',
  OutOfStock = 'OutOfStock'
};
