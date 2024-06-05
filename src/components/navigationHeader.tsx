import React from 'react';
import styles from './navigation.module.css';

interface HeaderProps {
  className?: string; 
}

function NavigationHeader({ className }: HeaderProps) {
  console.log('className:', className);
  return (
    <p className={className}>
      <span style={{ color: 'var(--prim)' }}>f</span>
      ashion
      <span style={{ color: 'var(--prim)' }}>R</span>
      ecomender
    </p>
  );
}

export default NavigationHeader;