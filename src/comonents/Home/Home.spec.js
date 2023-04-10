import { test, expect } from '@playwright/experimental-ct-react';
import Home from './Home';


test('render corectly', async ({ mount }) => {
  const component = await mount(<Home />);
  await expect(component).toContainText(/Music/i);
});