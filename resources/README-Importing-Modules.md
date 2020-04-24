An interesting read on importing modules:

If you are exporting serveral functions from a single js file:

js filename = service.js

export const function1 = (a,b) => {};

export const function2 = (a,b) => {};

You can import these functions a couple of different ways:

Option 1:
import { function1, function2 } from './services/service';
const val = function1(a,b);

Option 2:
import * as Services from './services/service';
const val = Services.function1(a,b);

Option 3:
It may become difficult to import things with relative paths as the project grows. Therefore I always would opt-in Babel's Module Resolver for aliases. Afterward, your import may look like the following:

import * as Services from '@service';
const val = Services.function1(a,b);