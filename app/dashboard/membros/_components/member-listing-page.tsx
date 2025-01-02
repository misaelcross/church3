import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Membro } from '@/constants/data';
import { fakeUsers } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import MembroTable from './member-tables';

type TMemberListingPage = {};

export default async function MemberListingPage({}: TMemberListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender })
  };

  // mock api call
  const data = await fakeUsers.getUsers(filters);
  const totalUsers = data.total_users;
  
  // Convert User to Membro
  const membros: Membro[] = data.users.map(user => ({
    id: user.id.toString(),
    name: `${user.first_name} ${user.last_name}`,
    email: user.email,
    phone: user.phone,
    position: user.job,
    department: '', // Não disponível no User
    created_at: new Date(), // Não disponível no User
    updated_at: new Date(), // Não disponível no User
    status: 'Ativo', // Valor padrão
    photo_url: user.profile_picture
  }));

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Membro (${totalUsers})`}
            description="Manage members (Server side table functionalities.)"
          />

          <Link
            href={'/dashboard/membros/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <MembroTable data={membros} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}
