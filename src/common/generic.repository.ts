export class GenericRepository {
  create: (data: any) => any;
  findAll: (data?: any) => any;
  findById: (data: any) => any;
  delete: (data: any) => any;
}
