import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';


import './style.css';
//import './ng-app-start.js'

var ngModule = angular.module('app', []);

const homeController = function($scope)
{
        $scope.movies = [
            {title: "Nienawistna ósemka", desc: "Dwaj łowcy głów, próbując znaleźć schronienie przed zamiecią śnieżną, trafiają do Wyoming, gdzie wplątani zostają w splot krwawych wydarzeń."},
            {title: "Dawno temu w trawie", desc: "Mrówki ciężko pracują wiosną i latem, by zebrać jedzenie na haracz dla koników polnych."},
            {title: "Zjawa", desc: "Hugh Glass szuka zemsty na ludziach, którzy zostawili go poważnie rannego po ataku niedźwiedzia. "},
            {title: "Igrzyska śmierci: Kosogłos. Część 2", desc: "Katniss Everdeen i przywódcy Dystryktu 13. rozpoczynają wielką ofensywę przeciwko dyktatorskiej władzy Kapitolu."}
            ]
}

ngModule.controller('HomeController', homeController);