## Component Card group modal
Component that displays a list of people limited by a parameter.

### Template:
```html
<evc-group-modal [styleClass]="styleClass" [model]="dataModel" [maxItems]="6"></evc-group-modal>
```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| styleClass   | String       | CSS class for the component.  |
| model   | Array Objects [1]       | List of images to be displayed.  |
| maxItems   | Number       | Maximum number of items to be displayed. |

```json
[1] [
      {
        link: '#',
        title: 'Ir a Florencia 1',
        imageURL: 'http://skmo.azurewebsites.net/img/user_image_02.png',
        altImage: 'Imagen alternativa 1'
      },
      {
        link: '#',
        title: 'Ir a Florencia 2',
        imageURL: 'http://skmo.azurewebsites.net/img/user_image_02.png',
        altImage: 'Imagen alternativa 2'
      },
      {
        link: '#',
        title: 'Ir a Florencia 3',
        imageURL: 'http://skmo.azurewebsites.net/img/user_image_02.png',
        altImage: 'Imagen alternativa 3'
      }
    ];
```

### Dependencies

There are no dependencies