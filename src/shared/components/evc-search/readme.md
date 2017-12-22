## Component search
Componente input buscador

### Use:
```html
<evc-search class="cr-search" defaultText="Introduzca aqui su parametro de entrada" iconClass="fa fa-search" (onChange)="onChange($event)" (onSelect)="onSelect($event)"></evc-search>
```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| defaultText   | String       | Parametro de entrada para indicar un placeholder personalizado|
| iconClass   | String       | Parametro de entrada para indicar el icono del boton

### Events:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| onChange   | Object       | Evento que se dispara al cambiar el texto del campo input|
| onSelect   | Object       | Evento que se dispara al pulsar el boton buscar|

### Dependencies

No existen dependencias