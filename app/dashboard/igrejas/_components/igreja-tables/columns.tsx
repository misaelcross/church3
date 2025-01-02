'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Igreja } from '@/types';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Igreja>[] = [
  {
    accessorKey: 'nome',
    header: 'Nome',
  },
  {
    accessorKey: 'endereco',
    header: 'Endereço',
  },
  {
    accessorKey: 'telefone',
    header: 'Telefone',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
