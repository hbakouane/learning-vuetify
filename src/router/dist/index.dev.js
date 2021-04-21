"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Projects = _interopRequireDefault(require("../views/Projects.vue"));

var _Team = _interopRequireDefault(require("../views/Team.vue"));

var _Login = _interopRequireDefault(require("../views/Login.vue"));

var _Register = _interopRequireDefault(require("../views/Register.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/projects',
  name: 'Projects',
  component: _Projects["default"]
}, {
  path: '/team',
  name: 'Team',
  component: _Team["default"]
}, {
  path: '/login',
  name: 'Login',
  component: _Login["default"]
}, {
  path: '/register',
  name: 'Register',
  component: _Register["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;