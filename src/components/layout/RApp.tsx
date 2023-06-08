import { FC, ReactNode } from 'react';
import RThemeProvider from '../theme/RThemeProvider';

interface Props {
    children: ReactNode
}

/**
 * The main wrapper to define a react-tailui application
 * @author Martiens Kropff
 * @param { ReactNode } children - The children of the component
 * @returns { JSX.Element } The RApp component
 */
const RApp: FC<Props> = ({ children }) => (
  <RThemeProvider>
    <div className='bg-background text-on-background dark:bg-dark-background dark:text-dark-on-background min-h-full'>
      {children}
    </div>
  </RThemeProvider>
);

export default RApp;