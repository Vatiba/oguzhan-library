type Pagination<T> = {
   count: number
   next: null
   previous: null
   results: T
}

export default Pagination;
