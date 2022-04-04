export interface PostImageType {
  url: string
}

export interface AuthorPhotoType {
  url: string
}

export interface AuthorType{
  photo: AuthorPhotoType
  name: string
}

export interface PostType {
  author: AuthorType
  slug: string
  title: string
  excerpt: string
  featuredImage: PostImageType
  createdAt: string
}
