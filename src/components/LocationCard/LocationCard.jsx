// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './LocationCard.scss';

type Props = {
  rank?: number,
  name: string,
  slug: string,
  totalRepositories: number,
  totalDevelopers: number,
  language?: {
    name: string,
    slug: string,
  },
};

const LocationCard = ({
  rank,
  name,
  slug,
  totalRepositories,
  totalDevelopers,
  language,
}: Props) => (
  <div className={styles.locationCard}>
    <Link to={`/location/${slug}`} className={styles.name}>
      {rank ? `#${rank} ${name}` : name}
    </Link>

    <div className={styles.meta}>
      <Link to={`/location/${slug}/developers`} className={styles.metaItem}>
        {totalDevelopers.toLocaleString()} Geliştirici
      </Link>
      <Link to={`/location/${slug}/repositories`} className={styles.metaItem}>
        {totalRepositories.toLocaleString()} Repo
      </Link>
      {language && (
        <Link to={`/language/${language.slug}`} className={cx(styles.metaItem, styles.language)}>
          {language.name}
        </Link>
      )}
    </div>
  </div>
);

LocationCard.defaultProps = {
  rank: undefined,
  language: undefined,
};

export default LocationCard;