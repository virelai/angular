import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';
//import './style.css'

//console.log(uirouter);
var ngModule = 
                angular
                        .module('app', [uirouter])
                        .config(routing);
