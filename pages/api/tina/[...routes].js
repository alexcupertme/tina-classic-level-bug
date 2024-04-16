import { LocalBackendAuthProvider, TinaNodeBackend } from '@tinacms/datalayer';

import databaseClient from '../../../../tina/__generated__/databaseClient';

const tinaBackend = TinaNodeBackend({
  authProvider: LocalBackendAuthProvider(),
  databaseClient,
});

const handler = (
  req,
  res,
) => {
  return tinaBackend(req, res);
};

export default handler;
