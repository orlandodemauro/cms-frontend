export interface Post {
    title: string
	state: string,
	author: {
        name: {
            first: string
          }
    },
	publishedDate: Date,
	image: object,
	content: {
		brief: string,
		extended: string,
	},
	categories: object,
}
