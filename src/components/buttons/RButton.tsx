import { ReactNode, FC, useContext } from 'react';
import ThemeContext from '@/contexts/ThemeContext';

interface Props {
    children: ReactNode,
    className?: string,
    variant?: 'default' | 'tonal' | 'outlined' | 'plain',
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
    flat?: boolean,
    block?: boolean
}

/**
 * React component for a button.
 * @param {ReactNode} children The component children
 * @returns {FC} A button component.
 */
const RButton: FC<Props> = ({ children, variant='default', size='medium', className='', flat=false, block=false }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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

  const getColor= () => 'bg-surface dark:bg-dark-surface text-on-surface dark:text-dark-on-surface';

  const getShadow = () => flat ? 'shadow-none' : 'shadow-lg';

  const getVariant = () => {
    switch(variant) {
    case 'tonal':
      return 'hover:bg-surface-variant dark:hover:bg-dark-surface-variant';
    case 'outlined':
      return 'border border-surface dark:border-dark-surface';
    case 'plain':
      return '';
    default:
      return 'hover:bg-surface-variant dark:hover:bg-dark-surface-variant';
    }
  };

  const getHover = () => {
    const baseClasses = 'before:content=[\'\'] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:transition-opacity hover:before:opacity-5';
    console.log(theme === 'light');
    if(theme === 'light') 
      return `${baseClasses} before:bg-black`;
    
    return `${baseClasses} before:bg-white`;
  };

  return (<button className={`select-none inline-block relative ${getShadow()} ${getSize()} ${getColor()} ${getHover()} ${className}`} onClick={() => toggleTheme && toggleTheme()}>
    {theme}
    {children}
  </button>);
};

export default RButton;