import { useEffect, useState } from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '@services/index'
import { graphCMSImageLoader } from '../util'

import { PostType } from 'types'

const PostWidget: React.FC<{ categories?: string[]; slug?: string }> = ({
  categories,
  slug,
}) => {
  const [relatedPosts, setRelatedPosts] = useState<PostType[]>([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories as string[], slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <Image
              loader={graphCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="rounded-full align-middle"
              src={post.featuredImage.url}
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={index}>
              <p className="text-md">{post.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
