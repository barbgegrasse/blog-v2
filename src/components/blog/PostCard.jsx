import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
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
  const categoryUid = post.data.categories[0].category.uid
  const categoryTitle = post.data.categories[0].category.document.dataRaw.name
  const title = post.data.post_title.text
  const preview = post.data.post_preview_description

  return (
    <PostCardContainer className="card">
      <div>
        <PostCategory>{categoryTitle}</PostCategory>
        <PostTitle>
          <Link to={`/blog/${categoryUid}/${uid}`}> {title}</Link>
        </PostTitle>
      </div>

      <PostDescription dangerouslySetInnerHTML={{ __html: preview.html }} />

      <div>
        <PostCardAction to={`/blog/${categoryUid}/${uid}`}>
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
