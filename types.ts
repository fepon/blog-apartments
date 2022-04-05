export interface PostImageType {
  url: string
}

export interface AuthorPhotoType {
  url: string
}

export interface AuthorType {
  photo: AuthorPhotoType
  name: string
  bio: string
}

export interface PostType {
  node: any
  categories: CategoryType[]
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

export interface FormDataType {
  name: string | null
  email: string | null
  comment?: string | null
  storeData: boolean | string | null
}
