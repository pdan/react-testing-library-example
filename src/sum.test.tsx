import { expect, test } from 'vitest'
import {render, screen} from '@testing-library/react'

import Sum from './sum.tsx';

test('adds 1 + 2 to equal 3', () => {
  render(<><Sum num1={12} num2={17} /></>)
  
  expect(screen.getByTestId("result").textContent).toBe("29")
})