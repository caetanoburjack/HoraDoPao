## Projeto Hora do Pão
#### Desenvolvido com Ionic 2/3 para a disciplina de Plataformas Híbridas - Faculdade Católica

* 2.0 1a avaliacao
* 1.0 localStorage - FEITO
* 1.5 acelerometro - FEITO
* 1.5 geolocation - FEITO
* 1.5 maps - FEITO
* 1.5 contatos
* 1.0 Media - FEITO
* 2.0 Camera - FEITO
* 2.0 http - FEITO
* 3.0 IndexedDB, SQLite, WebSQL


Explicando o aplicativo Hora do Pão para se compreender o uso de cada recurso.

Na tela inicial o app exibe o maps (MAPS) com a localização (GEOLOCATION) corrente do usuário.

Na tela seguinte aparece um tabController com duas telas, a primeira, Padarias, exibe uma lista de padarias que é trazida a partir de um [webservice](https://maps.googleapis.com/maps/api/place/textsearch/json?query=Padaria+in+Palmas-TO&key=AIzaSyAeJB8MoGIWW2-w6lGd-sLrDyEEKcHMlR8) (HTTP).

Na tab Ajustes é exibido o perfil do usuário, com imagem, nome e email onde é possível capturar uma imagem (CAMERA) ou pegar do aparelho (MEDIA) para ser usada como foto do perfil.

Também é possível acionar a função de trocar foto do usuário chacoalhando o celular (ACELEROMETRO), fazendo com que a actionSheet para escolher imagem seja exibida.

A imagem capturada é armazenada e o nome dela é salvo no armazenamento do aparelho (LOCAL STORAGE).

#### Plugins Utilizados
* "@angular/http": "4.0.2",
* "@angular/platform-browser": "4.0.2",
* "@angular/platform-browser-dynamic": "4.0.2",
* "@ionic-native/camera": "^3.10.2",
* "@ionic-native/device-motion": "^3.10.3",
* "@ionic-native/file": "^3.10.3",
* "@ionic-native/file-path": "^3.10.3",
* "@ionic-native/splash-screen": "3.4.2",
* "@ionic-native/status-bar": "3.4.2",
* "@ionic-native/transfer": "^3.10.3",
* "@ionic/storage": "^2.0.1",
