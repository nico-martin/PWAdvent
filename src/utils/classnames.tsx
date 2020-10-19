export default (classes: Record<string, boolean>): string =>
  Object.entries(classes)
    .filter(([cl, append]) => append)
    .map(([cl]) => cl)
    .join(' ');
