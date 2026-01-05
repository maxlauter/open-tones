
export enum BookingType {
  PRIVATE_1 = 'Private Session (1 Person)',
  PRIVATE_2 = 'Private Session (2 People)',
  SMALL_GROUP = 'Small Group (3-10)',
  LARGE_11_30 = 'Large Group (11-30+)',
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