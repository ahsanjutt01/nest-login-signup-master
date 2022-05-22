import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { OrdersService } from '../orders.service';

@Injectable()
export class TasksServiceService {
  private readonly logger = new Logger(TasksServiceService.name);

  constructor(private orderService: OrdersService) {}

  @Cron('45 * * * * *')
  migrationCron() {
    this.orderService.migrateSegment();
    this.orderService.migrateScheme();
    this.orderService.migrateProvince();
    this.orderService.migrateDesignation();
    this.orderService.migrateRegionAssignmentCity();
    this.orderService.migrateAreaAssignment();
    this.orderService.migrateTerritoryManagement();
    this.orderService.migrateCity();
    this.orderService.migrateDistributorsAssignment();
    this.orderService.migrateRegionsInfo();
    this.orderService.migrateRegionsInfo();
    this.orderService.migrateSubCategory();
    this.orderService.migrateSubCategory();
    this.orderService.migrateRetailerType();
    this.orderService.migrateSubInventoryManagement();
    this.orderService.migrateRegionAssignment();
    this.orderService.migratePosMaterialItem();
    this.orderService.migrateSchemeAssignment();
    this.orderService.migrateAreaAssignment();
    this.orderService.migrateDistributorProductsMargin();
    this.orderService.migrateBrands();
    this.orderService.migrateAreaAssignmentLocalitie();
    this.orderService.migrateInventoryTypesUnits();
    this.orderService.migrateNeighbourhood();
    this.orderService.migrateSpecialDiscount();
    this.orderService.migrateInventoryPreference();
    this.orderService.migrateDistributorReturnedProduct();
    this.orderService.migrateEmployeeInfo();
    this.orderService.migrateRouteAssignment();
    this.orderService.migrateTerritoryAssignmentNeighbourhood();
    this.orderService.migrateOrderBookersTarget();
    this.orderService.migraterouteRetailler();
    this.orderService.migrateAms();
    this.orderService.migrateSimilarityIndexResult();
    this.orderService.migratePosMaterialRetailer();
    this.orderService.migrateRetailerDetail();
    this.orderService.migrateStockMangement();
    this.orderService.migrateVisitMarked();
    this.orderService.migrateOrders();

    this.logger.debug('Called when the current second is 5');
  }
}
