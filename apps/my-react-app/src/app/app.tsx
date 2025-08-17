import { css } from '@acme/styled-system/css';
import { Alert, Badge } from '@acme/ui';

export default function App() {
  return (
    <>
      <div className={css({ color: 'cobalt.300', fontSize: '5xl' })}>Hello</div>
      <Badge status="error">Badge</Badge>
      <Alert
        description="Description"
        title="title"
        kind="subtle"
        status="error"
      />
    </>
  );
}
