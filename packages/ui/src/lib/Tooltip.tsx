import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip';
import { Portal } from '@ark-ui/react/portal';
import { styled } from '@acme/styled-system/jsx';

const TooltipTrigger = styled(ArkTooltip.Trigger);
const TooltipPositioner = styled(ArkTooltip.Positioner, {
  base: {
    zIndex: '50',
  },
});
const TooltipContent = styled(ArkTooltip.Content, {
  base: {
    bg: 'gray.900',
    color: 'white',
    px: '2',
    py: '1',
    borderRadius: 'md',
    fontSize: 'sm',
    shadow: 'lg',
    maxW: 'xs',
  },
});
const TooltipArrow = styled(ArkTooltip.Arrow, {
  base: {
    '--arrow-size': 'sizes.3',
    '--arrow-background': 'colors.gray.900',
  },
});

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  positioning?: ArkTooltip.RootProps['positioning'];
}

export const Tooltip = ({ content, children, positioning }: TooltipProps) => {
  return (
    <ArkTooltip.Root positioning={positioning}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <Portal>
        <TooltipPositioner>
          <TooltipContent>{content}</TooltipContent>
          <TooltipArrow>
            <ArkTooltip.ArrowTip />
          </TooltipArrow>
        </TooltipPositioner>
      </Portal>
    </ArkTooltip.Root>
  );
};