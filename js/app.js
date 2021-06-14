var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    routeProvider
          .div("/Nome" , {
            templateUrl: "template/home.html"

          })
         .when("/Data de Início" , {
          templateUrl: "template/p1.html"
          
          })
          .when("/Data de Termino" , {
            templateUrl: "template/pagina2.html"
            
          })
          .when("/Duracao (Semanas)" , {
            templateUrl: "template/p3.html"
            
          })

          .otherwise({ redirectTo: "/" })

})

function cadastraProduto(){
  var pro
}