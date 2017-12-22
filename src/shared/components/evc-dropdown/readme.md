## Component Dropdown
Dropdown component activated by a button or similar element. It is necessary to perform toggle with the boolean parameter' active'. It is also essential to add the property css' position: relative' to the parent of the activator and component evc-dropdown.

### Template:
```html
<div class="class-with-position-relative">
    <button type="button" (click)="active = !active">Toggle</button>
    <evc-dropdown [active]="active" [animation]="true" class="cr-dropdown__container" (onToggleDone)="onToggleDone($event)">
        <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?"
        </p>
    </evc-dropdown>
</div>
```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| active   | Boolean       | Initial state for the dropdown to be visible or hidden. |
| animation   | Boolean       | It is possible to avoid animation by indicating false on this input, adding the ngIf directive. So the content would disappear in the false state.  |

### Events:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| onToggleDone   | Event       | Event that is triggered when the animation finishes. |

### Dependencies

There are no dependencies