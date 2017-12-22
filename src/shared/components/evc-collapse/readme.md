## Component collapse
Componente collapse

### Template:
```html
<evc-collapse [active]="false">
	<button type="button" toggleButton>Header</button>
	<div class="cr-menu-list-column__container" container>
		<p>Container</p>
	</div>
</evc-collapse>
```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| active   | Boolean       | Estado inicial del elemento Collapse |


### Events:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| onToggleDone   | Boolean       | Evento que se dispara al finalizar la animación |
| onToggle   | Boolean        | Evento que se dispara al pulsar sobre el elemento padre |

### Dependencies

No existen dependencias