"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bike_route_1 = require("./modules/bike/bike.route");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application router
app.use('/api/v1/bikes', bike_route_1.BikeRoutes);
const getAController = (req, res) => {
    const a = 10;
    res.json({ value: a });
};
app.get('/', getAController);
exports.default = app;
