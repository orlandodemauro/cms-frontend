## Component Card
Componente Card

### Template:
```html
<evc-card [config]="config" [maxItems]="5">
	<evc-tabs class="cr-tabs">
	<evc-tabs-panel class="cr-tabs__panel" title="Tab 1" selected="true" descriptionLabel="Seleccionar tab 1">
		<ul list>
		<li>Item 1</li>
		<li>Item 1</li>
		<li>Item 1</li>
		<li>Item 1</li>
		<li>Item 1</li>
		<li>Item 1</li>
		<li>Item 1</li>
		</ul>
	</evc-tabs-panel>
	<evc-tabs-panel class="cr-tabs__panel" title="Tab 2" descriptionLabel="Seleccionar tab 2">
		<ul list>
		<li>Item 2</li>
		<li>Item 2</li>
		<li>Item 2</li>
		<li>Item 2</li>
		<li>Item 2</li>
		<li>Item 2</li>
		<li>Item 2</li>
		</ul>
	</evc-tabs-panel>
	<evc-tabs-panel class="cr-tabs__panel" title="Tab 3" descriptionLabel="Seleccionar tab 3">
		<p class="cr-tabs__panel-content">Contenido 3</p>
	</evc-tabs-panel>
	</evc-tabs>
</evc-card>
```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| config   | Array Objects {title:string, icon:string}       | List of options that component will contain. |
| maxItems   | Number      | Maximum number of items |


### Dependencies

There're no dependencies