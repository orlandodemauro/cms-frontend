## Component Tabs
Componente Tabs

### Template:
```html
<evc-tabs (onChange)="onChange($event, panel)" (onSelect)="onSelect($event, panel)">
    <evc-tabs-panel title="Tab 1" selected="true" descriptionLabel="Seleccionar tab 1">
        <p>Contenido 1</p>
    </evc-tabs-panel>
    <evc-tabs-panel title="Tab 2" descriptionLabel="Seleccionar tab 2">
        <p>Contenido 2</p>
    </evc-tabs-panel>
    <evc-tabs-panel title="Tab 3" descriptionLabel="Seleccionar tab 3">
        <p>Contenido 3</p>
    </evc-tabs-panel>
</evc-tabs>
```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| orientation   | String       | Orientación inicial de la lista (horizontal-top/horizontal-bottom/vertical-left/vertical-right) |
| title   | String       | Titulo de la pestaña  |
| selected   | Boolean       | Pestaña activada  |
| descriptionLabel   | String       | Titulo para el enlace de cada pestaña  |

### Events:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| onChange   | Event       | Evento que se dispara al cambiar de tab|
| onSelect   | Event       | Evento que se dispara al seleccionar un tab|

### Dependencies

No existen dependencias