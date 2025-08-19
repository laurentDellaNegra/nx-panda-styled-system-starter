import { Dialog as ArkDialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import { styled } from '@acme/styled-system/jsx';
import { css } from '@acme/styled-system/css';

const DialogTrigger = styled(ArkDialog.Trigger);
const DialogBackdrop = styled(ArkDialog.Backdrop, {
  base: {
    position: 'fixed',
    inset: '0',
    bg: 'black/50',
    zIndex: '50',
  },
});
const DialogPositioner = styled(ArkDialog.Positioner, {
  base: {
    position: 'fixed',
    inset: '0',
    zIndex: '50',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const DialogContent = styled(ArkDialog.Content, {
  base: {
    bg: 'white',
    borderRadius: 'lg',
    shadow: 'lg',
    p: '6',
    maxW: 'md',
    w: 'full',
    mx: '4',
  },
});
const DialogTitle = styled(ArkDialog.Title, {
  base: {
    fontSize: 'lg',
    fontWeight: 'semibold',
    mb: '2',
  },
});
const DialogDescription = styled(ArkDialog.Description, {
  base: {
    color: 'gray.600',
    mb: '4',
  },
});
const DialogCloseTrigger = styled(ArkDialog.CloseTrigger, {
  base: {
    position: 'absolute',
    top: '4',
    right: '4',
    p: '1',
    cursor: 'pointer',
    borderRadius: 'md',
    _hover: {
      bg: 'gray.100',
    },
  },
});

export interface DialogProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Dialog = ({ trigger, title, description, children }: DialogProps) => {
  return (
    <ArkDialog.Root>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
            <DialogCloseTrigger>
              <CloseIcon />
            </DialogCloseTrigger>
            {children}
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </ArkDialog.Root>
  );
};

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={css({ w: '5', h: '5' })}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}