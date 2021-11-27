# Prueba técnica React de LaLiga
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Versión de Node: 12.16.1 o superior
Versión de NPM: 6.13.4 o superiror
Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

## Instrucciones
- [Instrucciones](src/docs/laliga-prueba-tecnica-instrucciones.md)

## Entorno de desarrollo local

### `npm install`
Para instalación de dependencias

### `npm start`
Entorno de desarrollo

## Memoria

*** Puedes documentar aquí la memoria de tu prueba ***

Removiendo redux-sagas e implementando redux-thunk
    npm i redux-thunk 

Debido a la lógica de redux + thunk se agrega estructura 
    store/
        types => actionTypes 
        action => actions and thunk implementations 
        reducers => state reduces 

Se agregan librerias para el manejo de UI y Styling:
     styled-components: "^5.1.1" => Requisito para la implemetación de stilos en el proyecto
     @material-ui/core: "^4.12.3" => Como Design system 
	 @material-ui/icons: "^4.11.2", => SVG Icons  
	 @mui/styled-engine: "^5.2.0", => Styled engine para integración con styled-components 
     


 