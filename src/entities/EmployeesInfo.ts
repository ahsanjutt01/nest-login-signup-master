import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';

// TODO: relationship
@Entity({
  name: 'employees_info',
})
export default class EmployeesInfo extends BaseEntity {
  @Index()
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column({
    name: 'employee_first_name',
    nullable: true,
  })
  firstName: string;

  @Column({
    name: 'employee_last_name',
    nullable: true,
  })
  lastName: string;

  @Column({
    name: 'employee_full_name',
    nullable: true,
  })
  fullName: string;

  @Column({
    name: 'father_name',
    nullable: true,
  })
  fatherName: string;

  @Index()
  @Column({
    name: 'employee_username',
    nullable: true,
  })
  username: string;

  @Column({
    name: 'employee_password',
    nullable: true,
  })
  password: string;

  @Column({
    name: 'employee_email',
    nullable: true,
  })
  email: string;

  @Column({
    name: 'employee_address',
    nullable: true,
  })
  address: string;

  @Column({
    name: 'employee_city',
    nullable: true,
  })
  city: string;

  @Column({
    name: 'employee_country',
    nullable: true,
  })
  country: string;

  @Column({
    name: 'employee_picture',
    nullable: true,
  })
  picture: string;

  @Column({
    name: 'employee_gender',
    nullable: true,
  })
  gender: string;

  @Column({
    name: 'reporting_to',
    nullable: true,
  })
  reportingTo: number;

  @Column({
    name: 'territory_id',
    nullable: true,
  })
  territoryId: number;

  @Column({
    name: 'area_id',
    nullable: true,
  })
  areaId: number;

  @Column({
    name: 'region_id',
    nullable: true,
  })
  regionId: number;

  @Column({
    name: 'employee_cnic',
    nullable: true,
  })
  cnic: string;

  @Column({
    name: 'employee_hire_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  hireAt: string;

  @Column({
    name: 'employee_fire_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  fireAt: string;

  @Column({
    name: 'employee_designation',
    nullable: true,
  })
  designation: string;

  @Column({
    name: 'employee_designation_flag',
    nullable: true,
  })
  designationFlag: number;

  @Column({
    name: 'employee_department',
    nullable: true,
  })
  department: number;

  @Column({
    name: 'employee_phone',
    nullable: true,
  })
  phone: string;

  @Column({
    name: 'employee_phone2',
    nullable: true,
  })
  phone2: string;

  @Column({
    name: 'employee_salary',
    nullable: true,
  })
  salary: number;

  @Column({
    name: 'employee_base_station_lats',
    nullable: true,
  })
  baseStationLats: number;

  @Column({
    name: 'employee_base_station_longs',
    nullable: true,
  })
  baseStationLongs: number;

  @Column({
    name: 'province',
    nullable: true,
  })
  province: string;

  @Column({
    name: 'division_id',
    nullable: true,
  })
  divisionId: number;

  @Column({
    name: 'segment_id',
    nullable: true,
  })
  segmentId: number;
  @Column({
    name: 'status',
    nullable: true,
  })
  status: boolean;
  @Column({
    name: 'is_admin',
    nullable: true,
  })
  isAdmin: boolean;
  @Column({
    name: 'fcm_token',
    nullable: true,
  })
  fcmToken: string;
  @Column({
    name: 'app_version',
    nullable: true,
  })
  appVersion: number;
  @Column({
    name: 'dbversion',
    nullable: true,
  })
  dbversion: number;
  @Column({
    name: 'app_updated_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  appUpdatedAt: string;

  @Column({
    name: 'super',
    nullable: true,
  })
  super: boolean;

  @Column({
    name: 'password_changed',
    nullable: true,
  })
  passwordChanged: boolean;
  @Column({
    name: 'session',
    nullable: true,
  })
  session: string;
  @Column({
    name: 'joining_date',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  joiningDate: string;
  @Column({
    name: 'bike',
    nullable: true,
  })
  bike: string;
  @Column({
    name: 'bike_make',
    nullable: true,
  })
  bikeMake: string;
  @Column({
    name: 'bike_model',
    nullable: true,
  })
  bikeModel: string;

  @Column({
    name: 'ice_name',
    nullable: true,
  })
  iceName: string;

  @Column({
    name: 'ice_number',
    nullable: true,
  })
  iceNumber: string;

  @Column({
    name: 'ice_relation',
    nullable: true,
  })
  iceRelation: string;

  @Column({
    name: 'bank_account_title',
    nullable: true,
  })
  bankAccountTitle: string;

  @Column({
    name: 'bank_name',
    nullable: true,
  })
  bankName: string;

  @Column({
    name: 'bank_account_number',
    nullable: true,
  })
  bankAccountNumber: string;

  @Column({
    name: 'bank_iban',
    nullable: true,
  })
  bankIban: string;

  @Column({
    name: 'login_status',
    nullable: true,
  })
  loginStatus: boolean;

  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updatedBy: number;
}
