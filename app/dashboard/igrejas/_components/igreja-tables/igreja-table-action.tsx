import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function IgrejaTableAction() {
  return (
    <Link href="/dashboard/igrejas/nova">
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Adicionar Nova Igreja
      </Button>
    </Link>
  );
}
