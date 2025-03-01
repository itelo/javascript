import { Clerk, clerkClient, ClerkExpressRequireAuth, ClerkExpressWithAuth, createClerkClient } from './clerkClient';
import { createClerkExpressRequireAuth } from './clerkExpressRequireAuth';
import { createClerkExpressWithAuth } from './clerkExpressWithAuth';
import type {
  ClerkMiddleware,
  ClerkMiddlewareOptions,
  LooseAuthProp,
  RequireAuthProp,
  StrictAuthProp,
  WithAuthProp,
} from './types';

export * from '@clerk/backend';
/**
 * The order of these exports is important, as we want Clerk from clerk/sdk-node
 * to shadow the Clerk export from clerk/backend, because it needs to support
 * 2 additional apis: clerk.expressWithAuth, clerk.expressRequireAuth
 */
export { Clerk, clerkClient, ClerkExpressRequireAuth, ClerkExpressWithAuth, createClerkClient };

const {
  users,
  smsMessages,
  sessions,
  emailAddresses,
  phoneNumbers,
  emails,
  invitations,
  organizations,
  clients,
  allowlistIdentifiers,
  domains,
} = clerkClient;

export {
  allowlistIdentifiers,
  clients,
  domains,
  emailAddresses,
  emails,
  invitations,
  organizations,
  phoneNumbers,
  sessions,
  smsMessages,
  users,
};

export default clerkClient;

export type { ClerkMiddleware, ClerkMiddlewareOptions, LooseAuthProp, RequireAuthProp, StrictAuthProp, WithAuthProp };

export { createClerkExpressRequireAuth, createClerkExpressWithAuth };

export { requireAuth } from './requireAuth';
export { withAuth } from './withAuth';
