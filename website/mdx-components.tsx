/**
 * ABOUTME: MDX components configuration for custom rendering of MDX content.
 * Provides default styling for MDX elements used in documentation pages.
 */

import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use default components with prose styling from Tailwind Typography
    ...components,
  };
}
