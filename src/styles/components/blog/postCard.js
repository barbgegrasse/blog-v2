import styled from '@emotion/styled'
import { Link } from 'gatsby'
import theme from '../../global/theme'

const PostCardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5em 2.5em 2.25em 2.5em;

  border-radius: 3px;
  background-color: ${theme.bg.card};
  border: 1px solid ${theme.border.primary};
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    border: 1px solid ${theme.colors.primary};

    .PostCardAction {
      color: ${theme.colors.primary};
      transition: all 150ms ease-in-out;
      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`

const PostCategory = styled('h3')`
  font-weight: lighter;
  color: ${theme.colors.light};
`

const PostTitle = styled('h2')`
  margin: 0;
  margin-top: 0.5em;
  color: aliceblue;
  font-size: 3rem;
  color: ${theme.colors.primary};
  line-height: 1.3;
`

const PostMetas = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: aliceblue;
`

const PostDate = styled('div')`
  margin: 0;
`

const PostDescription = styled('div')`
  margin-top: 2em;
  margin-bottom: 4em;
  line-height: 1.3;
  p:last-of-type {
    margin: 0;
  }
`

const PostCardAction = styled(Link)`
  display: block;
  text-align: right;
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

export {
  PostCardContainer,
  PostCategory,
  PostTitle,
  PostMetas,
  PostDate,
  PostDescription,
  PostCardAction,
}
