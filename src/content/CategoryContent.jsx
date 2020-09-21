import PropTypes from 'prop-types'
import React from 'react'

import { BlogGrid } from '../styles/components/blog/listing'
import { MainTitle } from '../styles/common/title'
import PostCard from '../components/blog/PostCard'
import { ClassicText } from '../styles/common/text'

const CategoryContent = ({ allPrismicPost, prismicCategory }) => {
  return (
    <>
      <MainTitle as="h1">{prismicCategory.name}</MainTitle>
      <ClassicText
        dangerouslySetInnerHTML={{ __html: prismicCategory.description.html }}
      />

      <BlogGrid>
        {allPrismicPost.map(post => (
          <PostCard key={post.node.uid} post={post.node} />
        ))}
      </BlogGrid>
    </>
  )
}

CategoryContent.propTypes = {
  allPrismicPost: PropTypes.array.isRequired,
  prismicCategory: PropTypes.object.isRequired,
}

export default CategoryContent
