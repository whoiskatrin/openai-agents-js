import { ModelProvider } from './model';

let DEFAULT_PROVIDER: ModelProvider | undefined;

/**
 * Set the model provider used when no explicit provider is supplied.
 *
 * @param provider - The provider to use by default.
 */
export function setDefaultModelProvider(provider: ModelProvider) {
  DEFAULT_PROVIDER = provider;
}

/**
 * Returns the default model provider.
 *
 * @returns The default model provider.
 */
export function getDefaultModelProvider(): ModelProvider {
  if (typeof DEFAULT_PROVIDER === 'undefined') {
    throw new Error(
      'No default model provider set. Make sure to set a provider using setDefaultModelProvider before calling getDefaultModelProvider or pass an explicit provider.',
    );
  }
  return DEFAULT_PROVIDER;
}
