## Component Card List
Componente Card List

### Template:
```html
<evc-card-big class="cr-card-big" [data]="data">
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing L</p>
	<evc-tags class="cr-tags" [model]="data.tags"></evc-tags>
</evc-card-big>

```
### Properties:
| Name          | Type          | Description  |
| ------------- | ------------- | -------------|
| data   | Array Objects [1]       | List of options that component will contain. |

```json 
[1] this.data = {
      title: 'SKM: Intranet inteligente',
      type: 'Proyecto Interno',
      client: 'Cliente Everis',
      date: 'Mayo 2017 - Actualidad',
      tags: [
        {
          label: 'user journey',
          link: '#',
          title: 'Ir a user Journey'
        },
        {
          label: 'user journey',
          link: '#',
          title: 'Ir a user Journey'
        },
        {
          label: 'user journey',
          link: '#',
          title: 'Ir a user Journey'
        },
        {
          label: 'user journey',
          link: '#',
          title: 'Ir a user Journey'
        },
      ]
    };
```
### Dependencies

+ evc-tags
