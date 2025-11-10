/**
 * Stub de "base de datos" en JSON.
 *
 * En el proyecto original los datos se manejan en archivos JSON.
 * Aquí dejamos solo las firmas para que luego puedas conectar
 * el JSON real o migrar a una base de datos (PostgreSQL, Mongo, etc.).
 */

import type {
  Usuario,
  FichaMOPED,
  ConfiguracionSistema,
} from "./types";

export interface Database {
  usuarios: Usuario[];
  fichas: FichaMOPED[];
  configuracion: ConfiguracionSistema;
}

export const db: Database = {
  usuarios: [],
  fichas: [],
  configuracion: {
    anioActual: new Date().getFullYear(),
    momentoActual: 1,
    momentosActivos: [1],
  },
};
