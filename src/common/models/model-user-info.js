/**
 * @deprecated - use /src/modules/module-auth/common/subModule/model-user.js
 */

import USER_PROP_TYPE, * as USER from '../../modules/module-auth/common/subModule/model-user';

export const PUBLIC_USER_INFO_PROP_TYPE_MAP = USER.USER_PROP_TYPE_MAP;
export const PUBLIC_USER_INFO_PROP_TYPE = USER.PUBLIC_USER_PROP_TYPE;

export const PROTECTED_USER_INFO_PROP_TYPE_MAP = USER.PROTECTED_USER_PROP_TYPE_MAP;
export const PROTECTED_USER_INFO_PROP_TYPE = USER.PROTECTED_USER_PROP_TYPE;
export const DEFAULT_PROTECTED_USER_INFO = USER.DEFAULT_PROTECTED_USER;

export const USER_INFO_PROP_TYPE_MAP = USER.USER_PROP_TYPE_MAP;
export const USER_INFO_PROP_TYPE = USER.USER_PROP_TYPE;
export const USER_INFO_DEFAULT_VALUES = USER.USER_DEFAULT_VALUES;

export const { PUBLIC_EDITABLE_ATTRS } = USER;

export default USER_PROP_TYPE;

