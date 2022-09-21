import { HeaderOnly } from '~/layouts';

import Config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profiles from '~/pages/Profiles';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: Config.routes.home,
        component: Home,
    },
    {
        path: Config.routes.following,
        component: Following,
    },
    {
        path: Config.routes.profile,
        component: Profiles,
    },
    {
        path: Config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: Config.routes.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
