export class OrderDto {
  orderId?: number;
  userDto?: UserDto;
  orderItemsDto: OrderItemDto[];
  // orderItemsDto: List<OrderItemDto>;
  totalAmount: number;
  constructor(orderItemsDto: OrderItemDto[],totalAmount: number, orderId?:number, userDto?: UserDto) {
    this.orderId = orderId;
    this.userDto = userDto;
    this.orderItemsDto = orderItemsDto;
    this.totalAmount = totalAmount;
  }
}

export class UserDto {
  userId?: number;
  mobile: number;
  userRoleDto: UserRoleDto;
  constructor(mobile: number,userRoleDto: UserRoleDto, userId?: number) {
    this.userId = userId;
    this.mobile = mobile;
    this.userRoleDto = userRoleDto;
  }
}

export class UserRoleDto {
  roleId?: number;
  role: string;

  constructor(role: string, roleId?: number) {
    this.role = role;
    this.roleId = roleId;
  }
}

export class OrderItemDto {
  orderItemId?: number;
  menuItemDto: MenuItemDto;
  quantity: number;
  status: string;
  constructor(menuItemDto: MenuItemDto,quantity: number,status: string, orderItemId?: number) {
    this.orderItemId = orderItemId;
    this.menuItemDto = menuItemDto;
    this.quantity = quantity;
    this.status = status;
  }
}

export class MenuItemDto {
  menuItemId: number;
  price: number;
  category: string;
  name: string;

  constructor(menuItemId: number, price: number, category: string, name: string) {
    this.menuItemId = menuItemId;
    this.price = price;
    this.category = category;
    this.name = name;
  }
}

export enum ItemStatus {
  YET_TO_PREPARE = 'YET_TO_PREPARE',
  BEING_PREPARED = 'BEING_PREPARED',
  SERVED = 'SERVED',
}
