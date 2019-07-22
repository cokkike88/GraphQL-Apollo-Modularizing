import { merge } from 'lodash';
import { resolvers as clientResolver } from './clientResolver';
import { resolvers as productResolver } from './productResolver';
import { resolvers as fileResolver } from './fileResolver';

export default merge(clientResolver, productResolver, fileResolver);