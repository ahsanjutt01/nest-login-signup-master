// import { OrdersEntity } from './OrdersEntity';
import Ams from './ams';
import AreaAssignment from './areaAssignment';
import AreaAssignmentLocalitie from './areaAssignmentLocalitie';
import bookedOrderContent from './bookedOrderContent';
import Brand from './brand';
import City from './city';
import Designation from './designation';
import DistributorProductsMargin from './distributorProductsMargin';
import DistributorReturnedProduct from './distributorReturnedProduct';
import DistributorsAssignment from './distributorsAssignment';
import EmployeesInfo from './EmployeesInfo';
import InventoryPreference from './inventoryPreference';
import InventoryTypesUnits from './inventoryTypesUnit';
import Neighbourhood from './neighbourhood';
import Order from './Order';
import OrderBookersTarget from './orderBookersTarget';
import OrderContent from './orderContent';
import PosMaterialItem from './posMaterialItem';
import PosMaterialRetailer from './posMaterialRetailer';
import Province from './province';
import RegionAssignment from './regionAssignment';
import RegionAssignmentCity from './regionAssignmentCity';
import RegionsInfo from './regionsInfo';
import RetailersDetail from './retailersDetail';
import RetailerType from './retailerType';
import RouteAssignment from './routeAssignment';
import RouteRetailer from './routeRetailer';
import Scheme from './scheme';
import SchemeAssignment from './schemeAssignment';
import Segment from './segment';
import SimilarityIndexResult from './similarityIndexResult';
import SpecialDiscount from './specialDiscount';
import StockMangement from './stockManagement';
import SubCategory from './subCategory';
import SubInventoryManagement from './subInventoryManagement';
import TerritoryAssignmentNeighbourhood from './territoryAssignmentNeighbourhood';
import TerritoryManagement from './territoryManagement';
import VisitsMark from './visitsMarked';

const entities = [
  Order,
  OrderContent,
  EmployeesInfo,
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
  StockMangement,
  PosMaterialRetailer,
  SimilarityIndexResult,
  Ams,
  RouteRetailer,
  OrderBookersTarget,
  TerritoryAssignmentNeighbourhood,
  AreaAssignmentLocalitie,
  DistributorProductsMargin,
  AreaAssignment,
  SchemeAssignment,
  PosMaterialItem,
  SubInventoryManagement,
  RegionAssignment,
  SubCategory,
  RegionsInfo,
  DistributorsAssignment,
  City,
  TerritoryManagement,
  RegionAssignmentCity,
  Designation,
  Province,
  Scheme,
  Segment,
  VisitsMark,
];

export default entities;
