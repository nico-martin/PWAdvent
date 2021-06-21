import Head from 'next/head';
import React from 'react';
import cn from '@utils/classnames';
import { metaTitle } from '@utils/metas';
import { Loader, ShadowBox } from '../index';
import styles from './ContentModal.module.css';

const ContentModal = ({
  title,
  children,
  onClose,
  className = '',
  loading = false,
  full = true,
}: {
  title: string;
  children?: any;
  onClose: Function;
  className?: string;
  loading?: boolean;
  full?: boolean;
}) => (
  <React.Fragment>
    <Head>
      <title>{metaTitle(title)}</title>
    </Head>
    <ShadowBox
      title={title}
      close={onClose}
      className={cn(className)}
      size={full ? 'large' : 'small'}
    >
      <div className={styles.content}>
        {loading ? <Loader className={styles.loader} /> : children}
      </div>
    </ShadowBox>
  </React.Fragment>
);

export default ContentModal;
