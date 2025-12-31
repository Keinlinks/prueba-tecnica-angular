export interface PaginationResponse<T>{
  data:T;
  page:number;
  pageSize:number;
  totalRecords:number;
}
