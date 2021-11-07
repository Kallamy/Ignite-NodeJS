"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var express_1 = require("express");
var createUser_1 = require("../modules/users/useCases/createUser");
var listAllUsers_1 = require("../modules/users/useCases/listAllUsers");
var showUserProfile_1 = require("../modules/users/useCases/showUserProfile");
var turnUserAdmin_1 = require("../modules/users/useCases/turnUserAdmin");
var usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
usersRoutes.post("/", function (request, response) {
    return createUser_1.createUserController.handle(request, response);
});
usersRoutes.patch("/:user_id/admin", function (request, response) {
    return turnUserAdmin_1.turnUserAdminController.handle(request, response);
});
usersRoutes.get("/:user_id", function (request, response) {
    return showUserProfile_1.showUserProfileController.handle(request, response);
});
usersRoutes.get("/", function (request, response) {
    return listAllUsers_1.listAllUsersController.handle(request, response);
});
