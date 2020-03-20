import PropTypes from 'prop-types'
import React from 'react'

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
  const { uid } = post.node
  const CategorySlug = post.node.data.categories[0].category.slug
  const CategoryTitle = post.node.data.categories[0].category.document[0].data.name
  const Title = post.node.data.post_title.text
  const Preview = post.node.data.post_preview_description.html
  const Date = post.node.data.post_date

  return (
    <PostCardContainer>
      <div>
        <PostCategory to={`/blog/categorie-${CategorySlug}`}>{CategoryTitle}</PostCategory>
        <PostTitle>{Title}</PostTitle>
      </div>

      <PostDescription dangerouslySetInnerHTML={{ __html: Preview }} />
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
