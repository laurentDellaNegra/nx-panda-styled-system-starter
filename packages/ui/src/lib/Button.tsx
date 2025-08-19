import { styled } from '@acme/styled-system/jsx';
import { button } from '@acme/styled-system/recipes';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = styled('button', button);