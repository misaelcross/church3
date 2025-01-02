'use client';

import { DataTable } from '../../../../components/ui/table/data-table';
import { buttonVariants } from '../../../../components/ui/button';
import { Heading } from '../../../../components/ui/heading';
import { Separator } from '../../../../components/ui/separator';
import { columns } from './igreja-tables/columns';
import IgrejaTableAction from './igreja-tables/igreja-table-action';
import { igrejas } from '../../../../constants/data';
import { cn } from '../../../../lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function IgrejaListingPage() {
  return (
    <div className="flex-1 p-4 md:px-6 space-y-4">
      <div className="flex items-start justify-between">
        <Heading
          title={`Igrejas (${igrejas.length})`}
          description="Gerencie as igrejas (Funcionalidades da tabela do lado do servidor.)"
        />

        <Link
          href={'/dashboard/igrejas/new'}
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Adicionar Nova
        </Link>
      </div>
      <Separator />
      <IgrejaTableAction />
      <DataTable
        columns={columns}
        data={igrejas}
        totalItems={igrejas.length}
      />
    </div>
  );
}
