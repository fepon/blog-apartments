export interface PostImageType {
  url: string
}

export interface AuthorPhotoType {
  url: string
}

export interface AuthorType {
  photo: AuthorPhotoType
  name: string
}

export interface PostType {
  categories: string
  author: AuthorType
  slug: string
  title: string
  excerpt: string
  featuredImage: PostImageType
  createdAt: string
  content: {
    raw: {
      children: any
    }
  }
}

export interface CategoryType {
  slug: string
  name: string
}

export interface PostGetStaticPropsType {
  params: {
    slug: string
  }
}

export interface TextFragmentProps {
  bold?: object
  italic?: object
  underline?: object
}

export interface ImageFragmentProps {
  title?: string
  height?: string
  width?: string
  src?: string
}

export interface ObjFragmentProps
  extends TextFragmentProps,
    ImageFragmentProps {}

export interface AuthorType{
  photo:{
    url: string
  }
  name: string
  bio: string
}