import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Comprueba, en tiempo de build, si un archivo de /public existe.
 * Evita mostrar imágenes rotas cuando el cliente todavía no entregó el material.
 */
export function publicFileExists(path: string): boolean {
  if (!path || !path.startsWith('/')) return false;
  return existsSync(join(process.cwd(), 'public', path.replace(/^\/+/, '')));
}
