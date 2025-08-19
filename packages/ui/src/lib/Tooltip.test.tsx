import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { Button } from './Button';

describe('Tooltip', () => {
  it('renders with trigger and content', () => {
    render(
      <Tooltip content="Test tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Hover me');
  });

  it('accepts positioning props', () => {
    render(
      <Tooltip 
        content="Positioned tooltip"
        positioning={{ placement: 'top' }}
      >
        <Button>Test</Button>
      </Tooltip>
    );
    
    expect(screen.getByRole('button')).toBeTruthy();
  });
});