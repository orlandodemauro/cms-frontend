## Component Selector
Component that simulates a select input, clicking on it displays a list of options. We can select the option we need.

### Template:
```html
<evc-selector [model]="selectorModel" [nameSelector]="'selector-example'" [selected]="selected" [icons]="icons" (onChange)="onChange($event)"></evc-selector>
```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| model   | Array Objects {id: number; text: string;} | List of options that the selector will contain.  |
| nameSelector   | String       | Name for ids and selector attributes, this must be unique for each selector.  |
| selected   | Object {id: number; text: string;}  | Allows you to select a default option or set a selected option without having to interact with the component. |
| icons   | Object {active: string; inActive: string;}       | Through this parameter it is possible to indicate the active and inactive icon according to the dropdown status. |

### Events:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| onChange   | Event       | Event that is triggered by changing the selector option. |

### Dependencies

+ evc-dropdown