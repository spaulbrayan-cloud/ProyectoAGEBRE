export type Rol = "ADMIN" | "SUPER_ESPECIALISTA" | "ESPECIALISTA";

export interface Usuario {
  id: string;
  nombre: string;
  usuario: string;
  rol: Rol;
  redesAsignadas?: string[];
}

export type Momento = 1 | 2 | 3;

export interface ConfiguracionSistema {
  anioActual: number;
  momentoActual: Momento;
  momentosActivos: Momento[];
}

export type NivelLogro = "INICIO" | "PROCESO" | "LOGRADO" | "DESTACADO";

export interface FichaBase {
  id: string;
  especialistaId: string;
  reiId: string;
  ieId: string;
  fecha: string;
  momento: Momento;
}

export interface FichaGestionPedagogica extends FichaBase {
  tipo: "GESTION_PEDAGOGICA";
  items: NivelLogro[];
  recomendaciones?: string;
  compromisos?: string;
}

export interface FichaPlanificacionCurricular extends FichaBase {
  tipo: "PLANIFICACION_CURRICULAR";
  items: ("INICIO" | "PROCESO" | "LOGRADO")[];
  docente: string;
}

export interface FichaDesempenoDocente extends FichaBase {
  tipo: "DESEMPENO_DOCENTE";
  items: NivelLogro[];
  docente: string;
}

export type FichaMOPED =
  | FichaGestionPedagogica
  | FichaPlanificacionCurricular
  | FichaDesempenoDocente;
