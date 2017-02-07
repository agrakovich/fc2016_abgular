import angular from "angular";
import ArticleService from "./articleService";

const servicesModule = angular.module("app.services", []);

servicesModule.service("ArticleService", ArticleService);

export default servicesModule;