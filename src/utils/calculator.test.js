
import { describe, it, expect } from 'vitest';
import { add, isValidEmail } from './calculator.js';

describe('Calculator', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('Email validation', () => {
  it('accepts a valid email', () => {
    expect(isValidEmail('student@example.com')).toBe(true);
  });

  it('rejects an invalid email', () => {
    expect(isValidEmail('studentexample.com')).toBe(false);
  });
});
