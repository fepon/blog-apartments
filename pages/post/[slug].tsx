import React from 'react'
import { useRouter } from 'next/router'

import { getPostDetails, getPosts } from '@services/index'
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '@components/index'
import { PostType } from 'types'
import { GetStaticPaths, GetStaticProps } from 'next'

const PostDetails: React.FC<{ post: PostType }> = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget
              categories={post.categories.map((category) => category.slug)}
              slug={post.slug}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPostDetails(params?.slug as string)

  return {
    props: {
      post: data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}
