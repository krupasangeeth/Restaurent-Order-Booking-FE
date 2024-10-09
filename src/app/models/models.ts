export class OrderDto {
  orderId?: number;
  userDto: UserDto;
  orderItemsDto: OrderItemDto[];
  totalAmount: number;
  constructor(
    userDto: UserDto,
    orderItemsDto: OrderItemDto[],
    totalAmount: number
  ) {
    this.userDto = userDto;
    this.orderItemsDto = orderItemsDto;
    this.totalAmount = totalAmount;
  }
}
export class UserDto {
  userId?: number;
  mobile: number;
  userRoleDto: UserRoleDto;
  constructor(
    // userId : number ,
    mobile: number,
    userRoleDto: UserRoleDto
  ) {
    // this.userId = userId;
    this.mobile = mobile;
    this.userRoleDto = userRoleDto;
  }
}

export class UserRoleDto {
  roleId: number;
  role: string;

  constructor(roleId: number, role: string) {
    this.role = role;
    this.roleId = roleId;
  }
}
export class OrderItemDto {
  orderItemId?: number;

  menuItemDto: MenuItemDto;

  quantity: number;

  status: string;
  constructor(
    menuItemDto: MenuItemDto,

    quantity: number,
    status: string
  ) {
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
  constructor(
    menuItemId: number,

    price: number,

    category: string,

    name: string
  ) {
    this.menuItemId = menuItemId;
    this.price = price;
    this.category = category;
    this.name = name;
  }
}
