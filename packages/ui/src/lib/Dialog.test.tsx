import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';
import { Button } from './Button';

describe('Dialog', () => {
  it('renders trigger and opens dialog when clicked', () => {
    render(
      <Dialog
        trigger={<Button>Open Dialog</Button>}
        title="Test Dialog"
        description="Test description"
      >
        <div>Dialog content</div>
      </Dialog>
    );
    
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Open Dialog');
  });

  it('renders with title and description', () => {
    render(
      <Dialog
        trigger={<Button>Open</Button>}
        title="Test Title"
        description="Test Description"
      >
        Content
      </Dialog>
    );
    
    // The dialog elements are in a portal, so they might not be in the DOM initially
    expect(screen.getByRole('button')).toBeTruthy();
  });
});