import { test, expect } from '@playwright/experimental-ct-react';
import Register from './Register';



test('render corectly', async ({ mount }) => {
  const component = await mount(<Register/>);
  await expect(component).toContainText(/i/i);
});