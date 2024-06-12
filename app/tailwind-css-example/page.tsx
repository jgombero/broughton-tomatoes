import React from 'react';
/**
 * This is an example of how to import a CSS module. It's a javascript object that maps class names to object properties. Calling it "styles" is a convention.
 *  Note - This means class names can't have dashes in them. Instead the convention is to use camelCase.
 */
import styles from './TailwindCSSExample.module.css';

export default function TailwindCSSExample() {
  return <div className={styles.card}>Tailwind CSS Example</div>;
}
