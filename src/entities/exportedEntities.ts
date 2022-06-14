import authEntities from './_auth/_exportedAuthEntities';
import productEntities from './_product/_exportedProductEntities';

const entities = [authEntities, productEntities];

export default entities.flat();
