import external_routes from './external';
import internal_routes from './internal';

const routes = [
    ...external_routes,
    ...internal_routes,
];

export default routes;
