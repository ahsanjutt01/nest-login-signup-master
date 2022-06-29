import Business from "./business.entity";
import authEntities from "./_auth/_exportedAuthEntities";
// import productEntities from './_product/_exportedProductEntities';

const entities = [...authEntities, Business];

export default entities.flat();
