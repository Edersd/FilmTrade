import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//RxJS
import { Observable } from 'rxjs/Observable';

import { ConfigProvider } from '../config/config';

export interface LogIn {
  em: string;
  ps: string;
  to: string;
}

export interface Registro {
  na: string;
  em: string;
  ps: string;
  confps: string;
  tu: string;
  to: string;
}

export interface Vinculacion {
  id: number;
  nu: string;
  vm: string;
  va: string;
  cv: string;
  lu: string;
  tar: string;
  tt: string;
}

export interface SelectPaquete {
  id: number;
  cb: number;
  cg: number;
  cp: number;
}

export interface PerfilWork {
  id: number;
  tag: string;
}

export interface AgregarUsuarioProyecto {
  id_proy: number;
  id_us: number;
  id_us_co: number;
  sta: string;
  ti_pa: string;
}

export interface AgregarUsuarioProyecto2 {
  id_pro: number;
  work: number;
  hire: number;
  fecT: string;
  ti_pa: string;
  cos: number;
  Ho_Ex: number;
  hora: string;
}

export interface Galeria {
  na: string;
  des: string;
  lu: string;
  id_us: number;
}

export interface AgregarFavorito {
  id: number;
  idf: number;
}

export interface AgregarProyecto {
  id_us: number;
  na: string;
  des: string;
}

export interface AnadirProyecto {
  id_us: number;
  id_pro: number;
  us_p: number;
  na: string;
  des: string;
  fecI: Date;
  fecF: Date;
  ti_pa: string;
  di: string;
  ho: Date;
}

export interface Calificar {
  idc: number;
  ca: number;
  po: string;
}

export interface DeclinarProyecto {
  id: number;
  id_us: number;
  id_u_c: number;
}

export interface EditarInfoWork {
  id: number;
  fo: string;
  na: string;
  es: string;
  mu: string;
  oc: string;
}

export interface IdVerificacion {
  id: number;
  idV: number;
  img: string;
}

export interface InfoHire {
  id: number;
  id_ver: number;
  na: string;
  es: string;
  mu: string;
  com: string;
}

export interface InfoRol {
  id: number;
  na: string;
  es: string;
  mu: string;
  oc: string;
}

export interface CancelarServicio {
  id_pro: number;
  id_work: number;
}

export interface EstatusUsuarioProyecto {
  id: number;
  id_pro: number;
}

export interface EliminarFavoritoNotificacion {
  idu: number;
  idf: number;
}

export interface TrabajoTerminadoDatos {
  idh: number;
  idw: number;
}

export interface DiasHabiles {
  id: number;
  di: string;
}

export interface AgendadoWork {
  id_pro: number;
  id_hire: number;
  id_work: number;
}

export interface EditarInfoHire {
  id: number;
  fo: string;
  no: string;
  es: string;
  mu: string;
  co: string;
}

export interface ActualizarDias {
  id: number;
  dia: string;
}

export interface ActualizarPaquetes{
  id: number;
  cb: number;
  cg: number;
  cp: number;
}

export interface HoraExtra{
  id_pro: number;
  id_work: number;
  Ho_Ex: number;
}

export interface StatusHora{
  id_pro: number;
  id_work: number;
}

export interface AceptarHora{
  id_pro: number;
  id_work: number;
  cost: number;
}

export interface DeclinarHora {
  id_pro: number;
  id_work: number;
  hora: number;
}

export interface InfoProyecto{
  id: number;
  id_pro: number;
}

export interface FinalizarServicio{
  id_pro:number;
  id_work:number;
}

export interface EliminarUsuario{
  id_user:number;
}
export interface EliminarGaleria{
  id_user:number;
  posicion:number;
}
export interface MensajePush{
  to:string;
  //title:string;
  //message:string;
}

@Injectable()
export class AccountProvider {
  private LOGIN_URL: string = 'login.php';
  private REGISTRO_URL: string = 'registro.php';
  private VINCULACION_URL: string = 'vinculacion.php';
  private SELECTPAQUETE_URL: string = 'selectPaquete.php';
  private PERFILWORK_URL: string = 'perfilWork.php';
  private TODOPERFIL_URL: string = 'todoPerfil.php';
  private AGREGARUSUARIOPERFIL_URL: string = 'agregarUsuarioProyecto.php';
  private GALERIA_URL: string = 'Galeria.php';
  private PROYECTOUSUARIOS_URL: string = 'ProyectoUsuarios.php';
  private AGREGARFAVORITO_URL: string = 'agregarFavorito.php';
  private AGREGARPROYECTO_URL: string = 'agregarProyecto.php';
  private ANADIRPROYECTO_URL: string = 'anadirProyecto.php';
  private CALIFICAR_URL: string = 'calificar.php';
  private CUENTASVINCULADAS_URL: string = 'cuentasVinculadas.php';
  private DECLINAPROYECTO_URL: string = 'declinarProyecto.php';
  private EDITARINFOWORK_URL: string = 'editarInfoWork.php';
  private IDVERIFICACION_URL: string = 'idVerificacion.php';
  private INFOHIRE_URL: string = 'infoHire.php';
  private INFOROL_URL: string = 'infoRol.php';
  private LISTAFAVORITOS_URL: string = 'listaFavoritos.php';
  private LISTANOTIFICACIONES_URL: string = 'listaNotificaciones.php';
  private LISTAPERFILES_URL: string = 'listaPerfiles.php';
  private LISTAPERFILESBUSCAR_URL: string = 'listaPerfilesBuscar.php';

  private HTTP_HEADERS: HttpHeaders = null;

  constructor(public http: HttpClient, public configProv: ConfigProvider) {
    this.HTTP_HEADERS = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  public login(values: LogIn): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}login.php?em=${values.em}&ps=${values.ps}&to=${values.to}`, { headers: this.HTTP_HEADERS });
  }

  public registro(values: Registro): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}registro.php?na=${values.na}&em=${values.em}&ps=${values.ps}&confps=${values.confps}&tu=${values.tu}&to=${values.to}`, { headers: this.HTTP_HEADERS });
  }

  public vinculacion(values: Vinculacion): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}vinculacion.php?&id=${values.id}&nu=${values.nu}&vm=${values.vm}&va=${values.va}&cv=${values.cv}&lu=${values.lu}&tt=${values.tt}`, { headers: this.HTTP_HEADERS });
  }

  public selectPaquete(values: SelectPaquete): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}selectPaquete.php?cb=${values.cb}&cg=${values.cg}&cp=${values.cp}&id=${values.id}`, { headers: this.HTTP_HEADERS });
  }

  public perfilWork(values: PerfilWork): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}perfilWork.php?id=${values.id}&des=null&tag=${values.tag}`, { headers: this.HTTP_HEADERS });
  }

  public todoPerfil(id: number): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}todoPerfil.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public agregarUsuarioProyecto(values: AgregarUsuarioProyecto): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}AgregarUsuarioProyecto.php?id_proy=${values.id_proy}&id_us=${values.id_us}&id_us_co=${values.id_us_co}&sta=${values.sta}&ti_pa=${values.ti_pa}`, { headers: this.HTTP_HEADERS });
  }

  public galeria(values: Galeria): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}Galeria.php?na=${values.na}&des=${values.des}&lu=${values.lu}&id_us=${values.id_us}`, { headers: this.HTTP_HEADERS });
  }

  public listaPerfiles(id: number): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}listaPerfiles.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public proyectoUsuarios(id: number): Observable<any> {
    return this.http.get<any>(`proyectosUsuarios.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public agregarFavorito(values: AgregarFavorito): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}agregarFavorito.php?id=${values.id}&idf=${values.idf}`, { headers: this.HTTP_HEADERS });
  }

  public agregarProyecto(values: AgregarProyecto): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}agregarProyecto.php?na=${values.na}&des=${values.des}&id_us=${values.id_us}`, { headers: this.HTTP_HEADERS });
  }

  public anadirProyecto(values: AnadirProyecto): Observable<any> {
    return this.http.get<any>(`anadirProyecto.php?id_us=${values.id_us}&id_pro=${values.id_pro}&us_p=${values.us_p}&na=${values.na}&des=${values.des}&fecI=${values.fecI}&fecF=${values.fecF}&ti_pa=${values.ti_pa}&di=${values.di}&ho=${values.ho}`, { headers: this.HTTP_HEADERS });
  }

  public calificar(values: Calificar): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}calificar.php?idc=${values.idc}&ca=${values.ca}&po=${values.po}`, { headers: this.HTTP_HEADERS });
  }

  public cuentasVinculadas(id: number): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}cuentasVinculadas.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public declinarProyecto(values: DeclinarProyecto): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}declinarProyecto.php?id=${values.id}&id_us=${values.id_us}&id_u_c=${values.id_u_c}`, { headers: this.HTTP_HEADERS });
  }

  public editarInfoWork(values: EditarInfoWork): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}editarInfoWork.php?id=${values.id}&na=${values.na}&es=${values.es}&mu=${values.mu}&fo=${values.fo}&oc=${values.oc}`, { headers: this.HTTP_HEADERS });
  }

  public idVerificacion(values: IdVerificacion): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}idVerificacion.php?id=${values.id}&idV=${values.idV}&img=${values.img}`, { headers: this.HTTP_HEADERS });
  }

  public infoHire(values: InfoHire): Observable<any> {
    return this.http.get<any>(`infoHire.php?id=${values.id}&id_ver=${values.id_ver}&na=${values.na}&es=${values.es}&mu=${values.mu}&com=${values.com}`, { headers: this.HTTP_HEADERS });
  }

  public infoRol(values: InfoRol): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}infoRol.php?id=${values.id}&na=${values.na}&es=${values.es}&mu=${values.mu}&oc=${values.oc}`, { headers: this.HTTP_HEADERS });
  }

  public listaFavoritos(id: number): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}listaFavoritos.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public listaNotificaciones(id: number): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}listaNotificaciones.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public listaPerfilesBuscar(search: string): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}listaPerfilesBuscar.php?we=${search}`, { headers: this.HTTP_HEADERS });
  }

  public listadoProyectos(id: any): Observable<any> {
    //console.log(this.configProv.BASE_API,'/listadoProyectos.php?id_us=',id);
    return this.http.get<any>(`${this.configProv.BASE_API}listadoProyectos.php?id_us=${id}`, { headers: this.HTTP_HEADERS });
  }

  public agragarUsuarioProyecto(values: AgregarUsuarioProyecto2): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}agregarUsuarioProyecto.php?id_pro=${values.id_pro}&work=${values.work}&hire=${values.hire}&fecT=${values.fecT}&ti_pa=${values.ti_pa}&cos=${values.cos}&Ho_Ex=${values.Ho_Ex}&hora=${values.hora}`, { headers: this.HTTP_HEADERS });
  }

  public notificaciones(id: any): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}Notificaciones.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public notificacionesWork(id: any): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}NotificacionesWork.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public cancelarServicio(values: CancelarServicio): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}CancelarServicio.php?id_pro=${values.id_pro}&id_work=${values.id_work}`, { headers: this.HTTP_HEADERS });
  }

  public estatusUsuarioProyecto(values: EstatusUsuarioProyecto): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}estatusUsuarioProyecto.php?id=${values.id}&id_pro=${values.id_pro}`, { headers: this.HTTP_HEADERS });
  }

  public eliminarFavoritoNotificacion(values: EliminarFavoritoNotificacion): Observable<any> {
    console.log(this.configProv.BASE_API, 'eliminarFavoritoNotificacion.php?idu=', values.idu, '&idf=', values.idf);
    return this.http.get<any>(`${this.configProv.BASE_API}eliminarFavoritoNotificacion.php?idu=${values.idu}&idf=${values.idf}`, { headers: this.HTTP_HEADERS });
  }

  public trabajoTerminadoDatos(values: TrabajoTerminadoDatos): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}trabajoTerminadoDatos.php?idh=${values.idh}&idw=${values.idw}`, { headers: this.HTTP_HEADERS });
  }

  public diasHabiles(values: DiasHabiles): Observable<any> {
    console.log(this.configProv.BASE_API, 'diasHabiles.php?id=', values.id, '&di=', values.di);
    return this.http.get<any>(`${this.configProv.BASE_API}diasHabiles.php?id=${values.id}&di=${values.di}`, { headers: this.HTTP_HEADERS });
  }

  public portafolio(id: any): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}portafolio.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public agendadoWork(values: AgendadoWork): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}AgendadoWork.php?id_pro=${values.id_pro}&id_hire=${values.id_hire}&id_work=${values.id_work}`, { headers: this.HTTP_HEADERS });
  }

  public editarInfoHire(values: EditarInfoHire): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}editarInfoHire.php?id=${values.id}&no=${values.no}&es=${values.es}&mu=${values.mu}&fo=${values.fo}&co=${values.co}`, { headers: this.HTTP_HEADERS });
  }

  public listadoProyectosWork(id: any): Observable<any> {
    //console.log(this.configProv.BASE_API,'/listadoProyectos.php?id_us=',id);
    return this.http.get<any>(`${this.configProv.BASE_API}listadoProyectosWork.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public actualizarDias(values: ActualizarDias): Observable<any> {
    console.log(this.configProv.BASE_API, 'actualizarDias.php?id=', values.id, '&di=', values.dia);
    return this.http.get<any>(`${this.configProv.BASE_API}actualizarDias.php?id=${values.id}&dia=${values.dia}`, { headers: this.HTTP_HEADERS });
  }

  public actualizarPaquetes(values: ActualizarPaquetes): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}actualizarPaquetes.php?id=${values.id}&cb=${values.cb}&cg=${values.cg}&cp=${values.cp}`, { headers: this.HTTP_HEADERS });
  }

  public horaExtra(values: HoraExtra): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}HoraExtra.php?id_pro=${values.id_pro}&id_work=${values.id_work}&Ho_Ex=${values.Ho_Ex}`, { headers: this.HTTP_HEADERS });
  }

  public perfilHire(id): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}perfilHire.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }

  public statusHora(values: StatusHora): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}statusHora.php?id_pro=${values.id_pro}&id_work=${values.id_work}`, { headers: this.HTTP_HEADERS });
  }

  public aceptarHora(values: AceptarHora): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}aceptarHora.php?id_pro=${values.id_pro}&id_work=${values.id_work}&cost=${values.cost}`, { headers: this.HTTP_HEADERS });
  }

  public declinarHora(values: DeclinarHora): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}declinarHora.php?id_pro=${values.id_pro}&id_work=${values.id_work}&hora=${values.hora}`, { headers: this.HTTP_HEADERS });
  }

  public existenDias(id): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}existenDias.php?id=${id}`, { headers: this.HTTP_HEADERS });
  }
  
  public infoProyecto(values: InfoProyecto): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}infoProyecto.php?id=${values.id}&id_pro=${values.id_pro}`, { headers: this.HTTP_HEADERS });
  }

  public finalizarServicio(values: FinalizarServicio): Observable<any> {
    return this.http.get<any>(`${this.configProv.BASE_API}finalizarServicio.php?id_pro=${values.id_pro}&id_work=${values.id_work}`, { headers: this.HTTP_HEADERS });
  }

  public eliminarusuario(values: EliminarUsuario): Observable<any> {
    console.log(this.configProv.BASE_API, 'EliminarUsuaruio.php?id=', values.id_user);
    return this.http.get<any>(`${this.configProv.BASE_API}EliminarUsuaruio.php?id=${values.id_user}`, { headers: this.HTTP_HEADERS });
  }

  public eliminarGaleria(values: EliminarGaleria): Observable<any> {
    console.log(this.configProv.BASE_API, 'EliminarGaleria.php?id_user=',values.id_user,'&posicion=',values.posicion);
    return this.http.get<any>(`${this.configProv.BASE_API}EliminarGaleria.php?id_user=${values.id_user}&posicion=${values.posicion}`, { headers: this.HTTP_HEADERS });
  }

  
  
  
  public mensajePush(values: MensajePush): Observable<any> {
      console.log(this.configProv.BASE_API, 'pruebaToken.php?to=',values.to);
      return this.http.get<any>(`${this.configProv.BASE_API}pruebaToken.php?to=${values.to}`, { headers: this.HTTP_HEADERS });
    }
}
