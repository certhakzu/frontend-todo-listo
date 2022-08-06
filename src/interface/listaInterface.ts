export interface Lista {
  id:     string|null;
  nombre: string;
  tareas: Tarea[];
}

export interface Tarea {
  descripcion: string;
  esCompleta:  boolean;
}
