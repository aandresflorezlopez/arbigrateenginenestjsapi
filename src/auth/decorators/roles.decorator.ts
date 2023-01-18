import { SetMetadata } from '@nestjs/common';

import { Roles } from '../models/roles.model';

const ROLES_KEY = 'isPublic';

export const Role = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);
