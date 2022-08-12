import { Box, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import PaginationItem from './PaginationItem'

interface PaginationProps{
  totalCountOfRegisters: number;
  registerPerPage? : number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from:number , to:number){
  return [...new Array(to - from)]
  .map((_, index) => {
    return from + index + 1;
  })
}

export default function Pagination({
  totalCountOfRegisters, 
  registerPerPage = 10, 
  currentPage = 1, 
  onPageChange
} : PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters /registerPerPage);
  
  const previousPage = currentPage > 1 
    ? [
    : []
  
  return (
    <Stack
      direction={["column","row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2}  />
        <PaginationItem number={3}  />
        <PaginationItem number={4}  />
        <PaginationItem number={5}  />

      </Stack>
    </Stack>
  )
}
