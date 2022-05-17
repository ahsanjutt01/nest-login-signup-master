import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import Order from 'src/entities/Order';

export interface OrderRepositoryInterface
  extends BaseAbstractRepository<Order> {}
