import React from 'react';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import styles from '../assets/styles/Blog.module.css';

export default function LoadingIndicator({ message = "Loading..." }) {
  return (
    <div className={styles.loading}>
      <HourglassBottomIcon className={styles.loadingIcon} />
      <p>{message}</p>
    </div>
  );
}
