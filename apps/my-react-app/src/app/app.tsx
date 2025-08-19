import { css } from '@acme/styled-system/css';
import { HStack, VStack, Stack } from '@acme/styled-system/jsx';
import { Alert, Badge, Button, Dialog, Tooltip } from '@acme/ui';

export default function App() {
  return (
    <div className={css({ p: '8', maxW: '4xl', mx: 'auto' })}>
      <VStack gap="8" align="start">
        {/* Header */}
        <Stack gap="4">
          <div className={css({ color: 'cobalt.300', fontSize: '5xl', fontWeight: 'bold' })}>
            Ark UI + Panda CSS Demo
          </div>
          <div className={css({ color: 'gray.600', fontSize: 'lg' })}>
            Showcasing Ark UI components styled with Panda CSS
          </div>
        </Stack>

        {/* Existing Components */}
        <Stack gap="4">
          <h2 className={css({ fontSize: '2xl', fontWeight: 'semibold' })}>Existing Components</h2>
          <HStack gap="4">
            <Badge status="error">Error Badge</Badge>
            <Badge status="success" kind="solid">Success Badge</Badge>
            <Badge status="info" kind="outline">Info Badge</Badge>
          </HStack>
          <Alert
            description="This is an existing alert component built with Panda CSS"
            title="Alert Example"
            kind="subtle"
            status="info"
          />
        </Stack>

        {/* New Ark UI Components */}
        <Stack gap="4">
          <h2 className={css({ fontSize: '2xl', fontWeight: 'semibold' })}>New Ark UI Components</h2>
          
          {/* Buttons */}
          <Stack gap="3">
            <h3 className={css({ fontSize: 'lg', fontWeight: 'medium' })}>Buttons</h3>
            <HStack gap="3">
              <Button variant="primary" size="md">Primary Button</Button>
              <Button variant="secondary" size="md">Secondary Button</Button>
              <Button variant="outline" size="md">Outline Button</Button>
              <Button variant="ghost" size="md">Ghost Button</Button>
            </HStack>
            <HStack gap="3">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </HStack>
          </Stack>

          {/* Tooltip */}
          <Stack gap="3">
            <h3 className={css({ fontSize: 'lg', fontWeight: 'medium' })}>Tooltip</h3>
            <HStack gap="3">
              <Tooltip content="This is a helpful tooltip!">
                <Button variant="outline" size="md">Hover for tooltip</Button>
              </Tooltip>
              <Tooltip content="Another tooltip with more information about this button">
                <Button variant="ghost" size="md">Another tooltip</Button>
              </Tooltip>
            </HStack>
          </Stack>

          {/* Dialog */}
          <Stack gap="3">
            <h3 className={css({ fontSize: 'lg', fontWeight: 'medium' })}>Dialog</h3>
            <HStack gap="3">
              <Dialog
                trigger={<Button variant="primary" size="md">Open Dialog</Button>}
                title="Example Dialog"
                description="This is a modal dialog built with Ark UI and styled with Panda CSS."
              >
                <Stack gap="4">
                  <div>
                    This dialog demonstrates how Ark UI components can be seamlessly integrated
                    with Panda CSS for styling. The dialog includes backdrop, positioning,
                    and accessibility features out of the box.
                  </div>
                  <HStack gap="2" justify="end">
                    <Button variant="outline" size="sm">Cancel</Button>
                    <Button variant="primary" size="sm">Confirm</Button>
                  </HStack>
                </Stack>
              </Dialog>
              
              <Dialog
                trigger={<Button variant="outline" size="md">Settings Dialog</Button>}
                title="Settings"
              >
                <Stack gap="4">
                  <div>Configure your preferences here.</div>
                  <Stack gap="2">
                    <label className={css({ fontWeight: 'medium' })}>Theme</label>
                    <HStack gap="2">
                      <Button variant="ghost" size="sm">Light</Button>
                      <Button variant="ghost" size="sm">Dark</Button>
                    </HStack>
                  </Stack>
                </Stack>
              </Dialog>
            </HStack>
          </Stack>

        </Stack>
      </VStack>
    </div>
  );
}
