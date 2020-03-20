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
  const { uid } = post.node._meta
  const CategorySlug = post.node.categories[0].category._meta.uid
  const CategoryTitle = post.node.categories[0].category.name
  const Title = post.node.post_title[0].text
  const Preview = post.node.post_preview_description
  const Date = post.node.post_date

  return (
    <PostCardContainer>
      <div>
        <PostCategory to={`/blog/categorie-${CategorySlug}`}>{CategoryTitle}</PostCategory>
        <PostTitle>{Title}</PostTitle>
      </div>

      <PostDescription>{RichText.render(Preview)}</PostDescription>
      <div>
        <PostCardAction to={`/blog/${uid}`} className="PostCardAction">
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
