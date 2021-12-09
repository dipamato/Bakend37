import { Entity } from '@loopback/repository';
export declare class Pedidos extends Entity {
    id?: string;
    id_producto: string;
    cantidad: number;
    total: number;
    estado: string;
    personaId: string;
    productoId?: string;
    constructor(data?: Partial<Pedidos>);
}
export interface PedidosRelations {
}
export declare type PedidosWithRelations = Pedidos & PedidosRelations;
