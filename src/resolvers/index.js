import { merge } from 'lodash';
import { resolvers as clientResolver } from './clientResolver';
import { resolvers as productResolver } from './productResolver';

export default merge(clientResolver, productResolver);