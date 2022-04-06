import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '@components/index'
import { getPosts } from 'services'
import { PostType } from 'types'
import { FeaturedPosts } from '../sections/index'

const Home: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <h1 className="mb-10 text-center text-5xl font-bold text-white ">
        Catálogo de Departamentos
      </h1>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}

export default Home
