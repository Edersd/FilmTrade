import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Sesion, Theme, ListaPerfiles, CrearProyecto, TodoPerfil } from '../../model/interfaces/interfaces';

//RxJS
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigProvider {
  public BASE_API:string = 'http://d-ies.com/FilmTrade/API/';
  private SESION_OBJECT_KEY: string = 'sesion_object';
  private SESION_PROJECT_KEY: string = 'sesion_project';
  private URL_STATES_LIST: string = 'assets/json/states.json';
  private URL_REGIONS_LIST: string = 'assets/json/regions.json';
  private STATES_LIST: Array<any> = [];
  private REGIONS_LIST: any = {};
  private THEME_KEY: string = 'theme';
  private theme: BehaviorSubject<Theme> = new BehaviorSubject(Theme.DEFAULT);

  private items: any;
  private items2: Array<ListaPerfiles> = [];
  private LISTA_PERFILES: string = this.BASE_API + 'listaPerfiles.php?id=';
  private ALL_PERFILH: string = this.BASE_API + 'todoPerfil.php?id=';
  private LISTA_FAVORITES: string = this.BASE_API + 'listaFavoritos.php?id=';
  private LISTA_PERFILESAll: string = this.BASE_API + 'listaPerfilesAll.php';
  private PROJECTS_EXIS: string = this.BASE_API + 'proyectosExistentes.php?id=';

  constructor(private http: HttpClient, public storage: Storage) {
    this.storage.get(this.THEME_KEY).then(data => {
      if (data != null) {
        this.theme.next(data);
      }
    }).catch(error => console.error(error));
  }

  public getTheme(): Observable<Theme> {
    return this.theme.asObservable();
  }

  public setTheme(theme: Theme): void {
    this.theme.next(theme);
    this.storage.set(this.THEME_KEY, theme).then(data => console.log(data)).catch(error => console.error(error));
  }

  public removeTheme():void {
    this.storage.remove(this.THEME_KEY).then(data => console.log(data)).catch(error => console.error);
  }

  public getApiServer(): string {
    return this.BASE_API;
  }

  public setApiServer(api_server: string): void {
    this.BASE_API = api_server;
  }

  public getSesionObject(): Promise<any> {
    return this.storage.get(this.SESION_OBJECT_KEY);
  }

  public setSesionObject(sesionObject:any): void {
    this.storage.set(this.SESION_OBJECT_KEY, sesionObject).then(data => {
      console.log(data);
    }).catch(error => console.error(error));
  }

  public removeSesionObject(): void {
    this.storage.remove(this.SESION_OBJECT_KEY).then(data => {
      console.log(data);
    }).catch(error => console.error(error))
  }

  //Hire
  public getStateList(): Observable<Object> {
    return this.http.get(this.URL_STATES_LIST);
  }

  public getRegionsList(): Observable<Object> {
    return this.http.get(this.URL_REGIONS_LIST);
  }

  public getListProfiles(id: string): Observable<Object> {
    console.log(this.LISTA_PERFILES + id)
    this.items = this.http.get(this.LISTA_PERFILES + id);
      this.items.subscribe(data => {
        this.items2 = data;
      }, error => console.error(error));
    return this.http.get(this.LISTA_PERFILES + id);
  }

  public getListProfilesAll(): Observable<Object> {
    console.log(this.LISTA_PERFILESAll)
    this.items = this.http.get(this.LISTA_PERFILESAll);
      this.items.subscribe(data => {
        this.items2 = data;
      }, error => console.error(error));
    return this.http.get(this.LISTA_PERFILESAll);
  }

  public getAllPerfil(id: string): Observable<Object> {
    return this.http.get(this.ALL_PERFILH + id);
  }

  public getListFavorites(id: string): Observable<Object> {
    return this.http.get(this.LISTA_FAVORITES + id);
  }

  public getProjectExis(id: any): Observable<Object> {
    return this.http.get(this.PROJECTS_EXIS + id);
  }

  filterItems(searchTerm) {
    if (this.items2==null){
      return null;
    }else{
      return this.items2.filter((item) => {
        return item.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    }

  }

  public setAddProject(sesionObject: CrearProyecto): void {
    this.storage.set(this.SESION_PROJECT_KEY, sesionObject).then(data => {
      console.log(data);
    }).catch(error => console.error(error));
  }

  public setAllPerfil(sesionObject: TodoPerfil): void {
    this.storage.set(this.SESION_OBJECT_KEY, sesionObject).then(data => {
      console.log(data);
    }).catch(error => console.error(error));
  }

  public getSesionObjectProject(): Promise<any> {
    return this.storage.get(this.SESION_PROJECT_KEY);
  }

}
