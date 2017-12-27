export interface Post {
    title: string
	state: string,
	author: object,
	publishedDate: Date,
	image: object,
	content: {
		brief: string,
		extended: string,
	},
	categories: object,
}
