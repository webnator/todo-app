import config from '../../../../config/base.config';
import { EntitySort } from '../../../../services/abstractions/types/queryParams.types';

export function getSort<T extends string = string>(orderParam: string): EntitySort<T> {
  return {
    sort: orderParam?.split(':')[0] as unknown as T,
    order: (orderParam?.split(':')[1]?.toUpperCase() as EntitySort['order'] || config.SORT_DEFAULTS.ORDER) as EntitySort['order'],
  };
}

export function extractParams(req) {
  req.params = { ...req.params ?? {}, ...req.query ?? {} };
}

