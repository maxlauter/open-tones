
export enum BookingType {
  PRIVATE_1 = 'Private Session (1 Person)',
  PRIVATE_2 = 'Private Session (2 People)',
  SMALL_GROUP = 'Small Group (3-10)',
  LARGE_11_25 = 'Large Group (11-25)',
  LARGE_26_50 = 'Large Group (26-50)',
  LARGE_51_100 = 'Large Group (51-100)',
  CORPORATE = 'Corporate / Institutional'
}

export interface QuoteInputs {
  bookingType: BookingType;
  participantCount: number;
  isNonprofit: boolean;
  isStudent: boolean;
}

export interface QuoteResult {
  total: number;
  deposit: number;
  isCustom: boolean;
}
