import React from 'react'
import Pagination from '@app/components/common/Pagination';

function Test() {
   return (
      <Pagination
         pageCount={100}
         itemsPerPage={10}
         page={1}
         onPageChange={() => { }}
         pageRangeDisplayed={3}
      />
   )
}

export default Test;