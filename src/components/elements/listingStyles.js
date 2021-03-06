import styled from 'styled-components';

export const ListingWrapper = styled.article`
  margin-bottom: 2rem;

  .post__heading {
    color: var(--primary);
    transition: var(--transition);

    &:hover {
      color: var(--primaryLight);
    }

    &:active {
      color: var(--primaryDark);
    }
  }

  .post__date {
    color: var(--secondary);
    font-size: var(--smallText);
  }

  @media only screen and (max-width: 640px) {
    margin-bottom: 1rem;

    .post__heading {
      font-size: var(--headingFive);
    }
  }
`;
