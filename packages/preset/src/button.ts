import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium',
    transition: 'all',
    cursor: 'pointer',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.500',
      outlineOffset: '2px',
    },
  },
  variants: {
    variant: {
      primary: {
        bg: 'blue.500',
        color: 'white',
        _hover: {
          bg: 'blue.600',
        },
      },
      secondary: {
        bg: 'gray.200',
        color: 'gray.900',
        _hover: {
          bg: 'gray.300',
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'gray.300',
        color: 'gray.900',
        _hover: {
          bg: 'gray.50',
        },
      },
      ghost: {
        color: 'gray.900',
        _hover: {
          bg: 'gray.100',
        },
      },
    },
    size: {
      sm: {
        h: '8',
        px: '3',
        fontSize: 'sm',
      },
      md: {
        h: '10',
        px: '4',
        fontSize: 'md',
      },
      lg: {
        h: '12',
        px: '6',
        fontSize: 'lg',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});