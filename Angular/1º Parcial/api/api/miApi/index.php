<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../composer/vendor/autoload.php';
require './clases/AccesoDatos.php';
require './clases/entidadApi.php';


$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*
¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/

$app = new \Slim\App(["settings" => $config]);

/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
$app->group('/entidadGrupoRuta', function () {
 
  $this->get('/', \entidadApi::class . ':traerTodos');
 
  $this->get('/{id}', \entidadApi::class . ':traerUno');

  $this->post('/', \entidadApi::class . ':CargarUno');

  $this->delete('/', \entidadApi::class . ':BorrarUno');

  $this->put('/', \entidadApi::class . ':ModificarUno');
     
});

$app->run();