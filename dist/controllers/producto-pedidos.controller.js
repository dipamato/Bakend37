"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoPedidosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductoPedidosController = class ProductoPedidosController {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async get(id, filter) {
        return this.productoRepository.pedidos(id).get(filter);
    }
    async create(id, pedidos) {
        return this.productoRepository.pedidos(id).create(pedidos);
    }
    async patch(id, pedidos, where) {
        return this.productoRepository.pedidos(id).patch(pedidos, where);
    }
    async delete(id, where) {
        return this.productoRepository.pedidos(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productos/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Producto has one Pedidos',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos),
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoPedidosController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/productos/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Producto model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, {
                    title: 'NewPedidosInProducto',
                    exclude: ['id'],
                    optional: ['productoId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoPedidosController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/productos/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Producto.Pedidos PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedidos))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoPedidosController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/productos/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Producto.Pedidos DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedidos))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoPedidosController.prototype, "delete", null);
ProductoPedidosController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductoRepository])
], ProductoPedidosController);
exports.ProductoPedidosController = ProductoPedidosController;
//# sourceMappingURL=producto-pedidos.controller.js.map