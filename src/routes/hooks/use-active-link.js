import { usePathname } from './use-pathname';
import {
  hasParams,
  removeParams,
  isExternalLink,
  removeLastSlash,
} from '@/lib/util/utils';

export function useActiveLink(itemPath, deep = true) {
  const pathname = removeLastSlash(usePathname());
  const pathHasParams = hasParams(itemPath);
  const notValid = itemPath.startsWith('#') || isExternalLink(itemPath);

  if (notValid) {
    return false;
  }

  const isDeep = deep || pathHasParams;
  if (isDeep) {
    const defaultActive = pathname.includes(itemPath);
    const originItemPath = removeParams(itemPath);
    const hasParamsActive = pathHasParams && originItemPath === pathname;

    return defaultActive || hasParamsActive;
  }

  return pathname === itemPath;
}
