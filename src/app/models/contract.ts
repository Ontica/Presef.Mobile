import { DateString, Empty, Identifiable } from "@app/core";




export interface ContractFields { 
    contractUID?: string,   
    contractTypeUID: string;
    paymentType: string,   
    startDate: string,
    parties: PartyFields[] 
  }

export interface PartyFields {
  uid?: string,
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  dateOfBirth?:Date,
  gender:string,
  email: string,
  RFC: string,
  CURP:string,
  INE: string,
  phoneNumber: string,
  cellPhoneNumber: string,
  typeId: number 
}

export interface PaymentType extends Identifiable {}

export interface AgencyInfo extends Identifiable {}

export interface AgentInfo extends Identifiable{}

export interface ContractTypes extends Identifiable {}


export const PaymentTypes: PaymentType[] = [ {uid: '1', name: 'Pago vía nómina'}, 
                                      {uid: '2',name: 'Deposito bancario'},
                                      {uid: '3', name: 'Pago en OXXO'}, 
                                      {uid: '4',name: 'Otro medio'}];

export interface Contract { 
  contractTrackUID: string,
  contractTypeInfo: ContractTypes,
  contractNo: string,
  contractStatus: string,
  contractPaymentType: string, 
  startDate: DateString,
  endDate: DateString,
  parties: Party[],
  agency: AgencyInfo,
  agent: AgentInfo
}

export const EmptyContract: Contract = {
  contractTrackUID: '',
  contractTypeInfo:  {uid: '', name: ''},
  contractNo: '',
  contractStatus: '',
  contractPaymentType: '',
  startDate: '01-01-1900',
  endDate: '01-01-1900',
  parties: [],  
  agency: Empty,
  agent: Empty
}

export interface Party {
  address: string,
  cellPhoneNumber: string,
  curp: string,
  dateOfBirth: DateString,
  email: string,
  gender: string,
  ine: string,
  name: string,
  phoneNumber: string,
  rfc: string,
  typeId: number,
  uid: string,
  zip: string,
  state: string,
  city: string
}

