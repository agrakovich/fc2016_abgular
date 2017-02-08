import angular from "angular";
import NotFoundConfig from "./config";

const notFoundModule = angular.module("app.notFound", []);

notFoundModule.config(NotFoundConfig);

export default notFoundModule;