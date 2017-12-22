## Component welcome
Component that acts as a banner showing a greeting to the connected user, temperature, date and local time.

### Template:
```html
<evc-welcome [config]="config"></evc-welcome>
```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| config | Object [1] | Properties of the component to be configured |

```json
[1] {
        title: '¡Hola Florencia, bienvenida!',
        background: 'assets/images/angular.png',
        date: {
        today: new Date(),
        languageDate: 'es-ES',
        formatDate: {
            weekday: 'long',
            month: 'long', 
            day: 'numeric' 
        }
        },
        city: 'Barcelona, Spain',
        weather: '22º/12º',
        iconWeather: 'fa fa-sun-o'
    };
```

### Dependencies

There are no dependencies