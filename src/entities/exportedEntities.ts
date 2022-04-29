// import { OrdersEntity } from './OrdersEntity';
import bookedOrderContent from './bookedOrderContent';
import Brand from './brand';
import DistributorReturnedProduct from './distributorReturnedProduct';
import EmployeesInfo from './EmployeesInfo';
import InventoryPreference from './inventoryPreference';
import InventoryTypesUnits from './inventoryTypesUnit';
import Neighbourhood from './neighbourhood';
import { Order } from './Order';
import OrderContent from './orderContent';
import RetailersDetail from './retailersDetail';
import RetailerType from './retailerType';
import RouteAssignment from './routeAssignment';
import SpecialDiscount from './specialDiscount';

const entities = [
  EmployeesInfo,
  OrderContent,
  Order,
  bookedOrderContent,
  DistributorReturnedProduct,
  RetailersDetail,
  RouteAssignment,
  InventoryPreference,
  SpecialDiscount,
  Neighbourhood,
  InventoryTypesUnits,
  Brand,
  RetailerType,
];

export default entities;
