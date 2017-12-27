export interface Post {
    title: string
	state: string,
	author: string,
	publishedDate: Date,
	image: object,
	content: {
		brief: string,
		extended: string,
	},
	categories: string,
}
