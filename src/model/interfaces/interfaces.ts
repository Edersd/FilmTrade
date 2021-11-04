export enum SesionType{
  WORK = 2, HIRE = 3
}

export enum OccupationType{
  PHOTOGRAPHER = 1, VIDEOGRAPHER = 2, HAIR_MAKEUP = 3, TALENT = 4
}

export enum Theme{
  PHOTOGRAPHER = 'photographer-theme', VIDEOGRAPHER = 'videographer-theme', HAIR_MAKEUP = 'makeup-theme', TALENT = 'talent-theme', DEFAULT = 'videographer-theme'
}

export enum ThemeColor{
  PHOTOGRAPHER = 'photographer', VIDEOGRAPHER = 'videographer', HAIR_MAKEUP = 'makeup', TALENT = 'talent', DEFAULT = 'videographer'
}

export interface Notification{
  img?:string;
  projectName?:string;
  userName?:string;
  companyPosition?:string;
  description?:string;
  note?:string;
}

export interface Tag{
  name:string;
  id:number;
  selected?:boolean;
  color?:string;
}

export interface State{
  clave:string;
  descripcion:string;
  regions:string[];
}

export interface Sesion{
  name?:string;
  email?:string;
  password?:string;
  sesionType?:SesionType;
  cardNumber?:string;
  cardType?:string;
  cardCVV?:string;
  cardMonth?:number;
  cardYear?:number;
  state?:string;
  region?:string;
  occupationType?:OccupationType;
  occupationTags?:Array<Tag>;
  photos?:Array<string>;
  photoUri?:string;
  priceBasic?: number;
  priceGold?: number;
  pricePremium?: number;
  avaibleDates?: Array<string>;
}

export interface Guest {
  idGuest: string;
  name: string;
}

export interface Message{
  key?:string;
  idGuest: string;
  message:string;
  date:number;
}

export interface Chat {
  key?:string
  guest: Array<Guest>,
  messages?:Array<Message>,
  projectId?:string;
}

export interface ListaPerfiles{
  id?: string;
  foto?:string;
  nombre?: string;
  calificacion?: string;
  basic?: string;
  gold?: string;
  ocupation?: string;
  premium?: string;
  tags?: string;
  /* Mensaje: string;
  users: string[]; */
}

export interface TodoPerfil {
  id?: number;
  id_user_pagado?: number;
  nombre?: string;
  ocupation?: string;
  foto?: string;
  calificacion?: number;
  basic?: number;
  gold?: number;
  premium?: number;
  terminados?: number;
  entra?: number;
  dias?: Array<string>;
  dia?: Array<string>;
  avaibleDates?: Array<string>;
  galeria?: Array<string>;
  occupationType?: OccupationType,
  theme?: Theme;
}

export interface CrearProyecto {
  id?: number;
  id_user?: number;
  nombre?: string;
  name?: string;
  foto?:string;
  descripcion?: string;
  costo?:number;
  paquete?:number;
  hrspaquete?:number;
  extra?:number;
  avaibleDates?: Array<string>;
  hora?:string;
  calificacion?:number;
  id_proyecto?: number;
}
