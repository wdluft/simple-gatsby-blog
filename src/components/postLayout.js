import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SEO from './seo';
import Layout from './layout';

const PostWrapper = styled.article`
  .post__title {
    color: var(--primary-color-5);
  }

  .post__date {
    color: var(--tertiary-color-3);
    margin-bottom: 1rem;
    font-size: var(--text-4);
  }

  .post__body {
    font-size: var(--text-4);
    margin-bottom: 1.25rem;
  }

  .post__share-link {
    font-size: var(--text-4);
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;

    .post__title {
      font-size: var(--text-8);
    }

    .post__body {
      font-size: var(--text-5);
    }

    .post__share-link {
      font-size: var(--text-5);
    }
  }
`;

const postLayout = ({ data, location }) => {
  // data is a object
  // location is an object
  const { markdownRemark } = data;
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <PostWrapper className="post">
        <h1 className="post__title">{markdownRemark.frontmatter.title}</h1>
        <p className="post__date">{markdownRemark.frontmatter.date}</p>
        <div
          className="post__body"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <a
          className="post__share-link"
          href={`https://twitter.com/intent/tweet?text=${
            markdownRemark.frontmatter.title
          }&via=IAmWillDL&url=${location.href}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share post on Twitter
        </a>
      </PostWrapper>
    </Layout>
  );
};

postLayout.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default postLayout;
