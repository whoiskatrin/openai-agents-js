export function toSmartString(value: unknown): string {
  if (value === null || value === undefined) {
    return String(value);
  } else if (typeof value === 'string') {
    return value;
  } else if (typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch (_e) {
      return '[object with circular references]';
    }
  }
  return String(value);
}
