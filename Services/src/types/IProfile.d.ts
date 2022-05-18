export interface IAddress {
  street: string;
  city: string;
  state: string;
  ZIP: string;
  country: string;
}
export default interface IProfile {
  id: string;
  name: string;
  phone?: string;
  department?: string;
  address?: IAddress;
  readonly created?: Date;
  updated?: Date;
}
