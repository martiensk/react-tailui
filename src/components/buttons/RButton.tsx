import { ReactNode, FC, useContext } from 'react';
import ThemeContext from '@/contexts/ThemeContext';

export interface Props {
    children: ReactNode,
    className?: string,
    variant?: 'default' | 'tonal' | 'outlined' | 'text' | 'plain',
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
    flat?: boolean,
    block?: boolean,
    color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

/**
 * React component for a button.
 * @param {ReactNode} children The component children
 * @returns {FC} A button component.
 */
const RButton: FC<Props> = ({ children, variant='default', size='medium', className='', flat=false, block=false, color='' }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  /**
   * Gets the button size classes
   * @author Martiens Kropff
   * @returns {string} The size classes
   */
  const getSize = () => {
    switch(size) {
    case 'extra-small':
      return 'px-2 py-1 text-xs';
    case 'small':
      return 'px-3 py-2 text-sm';
    case 'medium':
      return 'px-4 py-2 text-base';
    case 'large':
      return 'px-5 py-3 text-lg';
    case 'extra-large':
      return 'px-6 py-4 text-xl';
    default:
      return 'px-4 py-2 text-base';
    }
  };

  /**
   * Gets the tonal button color classes
   * @author Martiens Kropff
   * @returns {string} The color classes
   */
  const getTonalColors = () => {
    switch(color) {
    case 'secondary':
      return 'bg-secondary dark:bg-dark-secondary text-on-secondary dark:text-dark-on-secondary';
    case 'tertiary':
      return 'bg-tertiary dark:bg-dark-tertiary text-on-tertiary dark:text-dark-on-tertiary';
    case 'error':
      return 'bg-error dark:bg-dark-error text-on-error dark:text-dark-on-error';
    default:
      return 'bg-primary dark:bg-dark-primary text-on-primary dark:text-dark-on-primary';
    }
  };

  /**
   * Gets the button shadow classes
   * @author Martiens Kropff
   * @returns {string} The shadow classes
   */
  const getShadow = () => flat || variant === 'plain' ? 'shadow-none' : 'shadow-lg';

  /**
   * Gets the default button color classes
   * @author Martiens Kropff
   * @returns {string} The color classes
   */
  const getDefaultColors = () => {
    switch(color) {
    case 'secondary':
      return 'bg-secondary-container dark:bg-dark-secondary-container text-on-secondary-container dark:text-dark-on-secondary-container';
    case 'tertiary':
      return 'bg-tertiary-container dark:bg-dark-tertiary-container text-on-tertiary-container dark:text-dark-on-tertiary-container';
    case 'error':
      return 'bg-error dark:bg-dark-error text-on-error dark:text-dark-on-error';
    default:
      return 'bg-primary-container dark:bg-dark-primary-container text-on-primary-container dark:text-dark-on-primary-container';
    }
  };

  /**
   * Gets outline button color classes
   * @author Martiens Kropff
   * @returns {string} The color classes
   */
  const getOutlineColors = () => {
    switch(color) {
    case 'secondary':
      return 'text-secondary dark:text-dark-secondary border-2 border-solid border-secondary';
    case 'tertiary':
      return 'text-tertiary dark:text-dark-tertiary border-2 border-solid border-tertiary';
    case 'error':
      return 'text-error dark:text-dark-on-error border-2 border-solid border-error';
    default:
      return 'text-primary dark:text-dark-primary border-2 border-solid border-primary';
    }
  };

  /**
   * Gets plain button color classes
   * @author Martiens Kropff
   * @returns {string} The color classes
   */
  const getPlainColours = () => {
    switch(color) {
    case 'primary':
      return 'text-primary dark:text-dark-primary';
    case 'secondary':
      return 'text-secondary dark:text-dark-secondary';
    case 'tertiary':
      return 'text-tertiary dark:text-dark-tertiary';
    case 'error':
      return 'text-error dark:text-dark-on-error';
    default:
      return 'text-on-surface dark:text-dark-on-surface';
    }
  };

  /**
   * Gets the variant button color classes
   * @author Martiens Kropff
   * @returns {string} The color classes
   */
  const getVariant = () => {
    switch(variant) {
    case 'tonal':
      return getTonalColors();
    case 'outlined':
      return getOutlineColors();
    case 'text':
    case 'plain':
      return getPlainColours();
    default:
      return getDefaultColors();
    }
  };

  /**
   * Gets the block button classes
   * @author Martiens Kropff
   * @returns {string} The block classes
   */
  const getBlock = () => {
    if(block) return 'w-full';
    return '';
  };

  /**
   * Gets the button hover classes based on the theme color scheme
   * @author Martiens Kropff
   * @returns {string} The hover classes
   */
  const getHover = () => {
    if(variant === 'plain') {
      if(theme === 'light') return 'hover:brightness-75';
      return 'hover:brightness-115';
    }
    const baseClasses = 'before:content=[\'\'] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:transition-opacity hover:before:opacity-15';
    if(theme === 'light') 
      return `${baseClasses} before:bg-black`;
    
    return `${baseClasses} before:bg-white`;
  };

  return (<button className={`select-none inline-block relative font-bold outline-none uppercase ${getShadow()} ${getSize()} ${getHover()} ${getVariant()} ${getBlock()} ${className}`} onClick={() => toggleTheme && toggleTheme()}>
    {theme}
    {children}
  </button>);
};

export default RButton;