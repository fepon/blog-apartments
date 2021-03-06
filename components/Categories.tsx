import { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '@services/index'
import { CategoryType } from 'types'

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    getCategories().then((nextCategories) => setCategories(nextCategories))
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold ">Categorias</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
