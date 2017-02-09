import angular from "angular";
import EditorConfig from "./config";
import EditorCtrl from "./controller";
import MinTextLengthDirective from "../../directives/minTextLength";
import './style.scss'

const editorModule = angular.module("app.editor", []);

editorModule.config(EditorConfig);
editorModule.controller("EditorCtrl", EditorCtrl);
editorModule.directive('minTextLengthDirective', () => new MinTextLengthDirective());

export default editorModule;