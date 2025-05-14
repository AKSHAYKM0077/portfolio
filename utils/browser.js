// Utility functions for browser-only code
export const isBrowser = typeof window !== 'undefined';

// Safe document access
export const getDocument = () => {
  if (!isBrowser) return null;
  return document;
};

// Safe window access
export const getWindow = () => {
  if (!isBrowser) return null;
  return window;
};

// Safe element query
export const querySelector = (selector) => {
  if (!isBrowser) return null;
  return document.querySelector(selector);
};

export const querySelectorAll = (selector) => {
  if (!isBrowser) return [];
  return Array.from(document.querySelectorAll(selector));
};

// Safe event listener management
export const addEventListener = (element, event, handler, options) => {
  if (!isBrowser || !element) return;
  element.addEventListener(event, handler, options);
};

export const removeEventListener = (element, event, handler, options) => {
  if (!isBrowser || !element) return;
  element.removeEventListener(event, handler, options);
}; 