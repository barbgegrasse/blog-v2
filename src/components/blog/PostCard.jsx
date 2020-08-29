import PropTypes from 'prop-types'
import React from 'react'
import { RichText } from 'prismic-reactjs'

import {
  PostCardContainer,
  PostCategory,
  PostTitle,
  PostMetas,
  PostDate,
  PostDescription,
  PostCardAction,
} from '../../styles/components/blog/postCard'

const PostCard = ({ post }) => {
  const { uid } = post
  const categorySlug = post.data.categories[0].category.uid
  const categoryTitle = post.data.categories[0].category.document.dataRaw.name
  const title = post.data.post_title.text
  const preview = post.data.post_preview_description

  return (
    <PostCardContainer>
      <div>
        <PostCategory to={`/blog/categorie-${categorySlug}`}>
          {categoryTitle}
        </PostCategory>
        <PostTitle>{title}</PostTitle>
      </div>

      <PostDescription dangerouslySetInnerHTML={{ __html: preview.html }} />

      <div>
        <PostCardAction to={`/blog/${uid}`}>
          En savoir plus <span>&#8594;</span>
        </PostCardAction>
        <PostMetas>
          <PostDate>{Date}</PostDate>
        </PostMetas>
      </div>
    </PostCardContainer>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostCard
