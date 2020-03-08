import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ post }) => {
  const { uid } = post.node
  const CategorySlug = post.node.data.categories[0].category.slug
  const CategoryTitle = post.node.data.categories[0].category.document[0].data.name
  const PostTitle = post.node.data.post_title.text
  const PostPreview = post.node.data.post_preview_description.html
  const PostDate = post.node.data.post_date

  return (
    <div>
      <h2>
        <Link to={`/blog/categorie-${CategorySlug}`}>{CategoryTitle}</Link>
      </h2>
      <h3>{PostTitle}</h3>
      <div dangerouslySetInnerHTML={{ __html: PostPreview }} />
      <Link to={`/blog/${uid}`}>En savoir plus</Link>
      <p>{PostDate}</p>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostCard
