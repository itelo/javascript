import { isPublishableKey } from '@clerk/shared/keys';
import type { InitialState } from '@clerk/types';
import React from 'react';

import { multipleClerkProvidersError } from '../errors';
import type { IsomorphicClerkOptions } from '../types';
import { __internal__setErrorThrowerOptions, errorThrower, withMaxAllowedInstancesGuard } from '../utils';
import { ClerkContextProvider } from './ClerkContextProvider';
import { StructureContext, StructureContextStates } from './StructureContext';

__internal__setErrorThrowerOptions({
  packageName: '@clerk/clerk-react',
});

export type ClerkProviderProps = IsomorphicClerkOptions & {
  children: React.ReactNode;
  initialState?: InitialState;
};

function ClerkProviderBase(props: ClerkProviderProps): JSX.Element {
  const { initialState, children, ...restIsomorphicClerkOptions } = props;
  const { publishableKey = '', Clerk: userInitialisedClerk } = restIsomorphicClerkOptions;

  if (!userInitialisedClerk) {
    if (!publishableKey) {
      errorThrower.throwMissingPublishableKeyError();
    } else if (publishableKey && !isPublishableKey(publishableKey)) {
      errorThrower.throwInvalidPublishableKeyError({ key: publishableKey });
    }
  }

  return (
    <StructureContext.Provider value={StructureContextStates.noGuarantees}>
      <ClerkContextProvider
        initialState={initialState}
        isomorphicClerkOptions={restIsomorphicClerkOptions}
      >
        {children}
      </ClerkContextProvider>
    </StructureContext.Provider>
  );
}

const ClerkProvider = withMaxAllowedInstancesGuard(ClerkProviderBase, 'ClerkProvider', multipleClerkProvidersError);

ClerkProvider.displayName = 'ClerkProvider';

export { ClerkProvider, __internal__setErrorThrowerOptions };
