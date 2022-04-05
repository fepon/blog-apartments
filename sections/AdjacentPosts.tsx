import React, { useState, useEffect } from 'react'

import { AdjacentPostCard } from '@components/index'
import { getAdjacentPosts } from '@services/index'

const AdjacentPosts: React.FC<{ createdAt: string; slug: string }> = ({
  createdAt,
  slug,
}) => {
  const [adjacentPost, setAdjacentPost] = useState<any>(null)
  const [dataLoaded, setDataLoaded] = useState<any>(false)

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result)
      setDataLoaded(true)
    })
  }, [slug])

  return (
    <div className="mb-8 grid grid-cols-1 gap-12 lg:grid-cols-8">
      {dataLoaded && (
        <>
          {adjacentPost?.previous && (
            <div
              className={`${
                adjacentPost.next
                  ? 'col-span-1 lg:col-span-4'
                  : 'col-span-1 lg:col-span-8'
              } adjacent-post relative h-72 rounded-lg`}
            >
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost.next && (
            <div
              className={`${
                adjacentPost.previous
                  ? 'col-span-1 lg:col-span-4'
                  : 'col-span-1 lg:col-span-8'
              } adjacent-post relative h-72 rounded-lg`}
            >
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default AdjacentPosts
