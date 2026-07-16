import { useSyncExternalStore } from 'react';

/**
 * Minimal shared state for Inspect mode, so the Navigation toggle and the
 * homepage overlay (mounted in different trees) stay in sync without
 * context plumbing.
 */
let active = false;
const listeners = new Set<() => void>();

export const inspectStore = {
  get: () => active,
  set(value: boolean) {
    if (active === value) return;
    active = value;
    listeners.forEach((l) => l());
  },
  toggle() {
    inspectStore.set(!active);
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
};

export function useInspectActive() {
  return useSyncExternalStore(inspectStore.subscribe, inspectStore.get);
}
