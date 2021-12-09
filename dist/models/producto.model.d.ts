import { Entity } from '@loopback/repository';
import { Pedidos } from './pedidos.model';
export declare class Producto extends Entity {
    id?: string;
    nombre: string;
    precio: number;
    imagen: string;
    pedidos: Pedidos;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
