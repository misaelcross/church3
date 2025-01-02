import { Employee, Igreja, Membro } from '@/types';

export type { Membro };

export const membros: Membro[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '(11) 9999-9999',
    position: 'Desenvolvedor',
    department: 'TI',
    created_at: new Date(),
    updated_at: new Date(),
    status: 'Ativo',
    photo_url: '/images/employee1.jpg'
  },
  {
    id: '2',
    name: 'Maria Souza',
    email: 'maria@example.com',
    phone: '(11) 8888-8888',
    position: 'Designer',
    department: 'Marketing',
    created_at: new Date(),
    updated_at: new Date(),
    status: 'Ativo',
    photo_url: '/images/employee2.jpg'
  }
];

export const navItems = [
  {
    title: 'Visão Geral',
    url: '/dashboard/overview',
    shortcut: ['v']
  },
  {
    title: 'Igrejas',
    url: '/dashboard/igrejas',
    shortcut: ['i']
  },
  {
    title: 'Membros',
    url: '/dashboard/membros',
    shortcut: ['m']
  },
  {
    title: 'Perfil',
    url: '/dashboard/profile',
    shortcut: ['p']
  }
];

export const igrejas: Igreja[] = [
  {
    id: '1',
    nome: 'Igreja Matriz',
    endereco: 'Rua Principal, 123',
    telefone: '(11) 9999-9999',
    photo_url: '/images/igreja1.jpg',
    description: 'Igreja principal da cidade',
    created_at: new Date(),
    updated_at: new Date(),
    status: 'Ativa',
    category: 'Matriz',
    name: 'Igreja Matriz',
    price: 0
  },
  {
    id: '2',
    nome: 'Igreja São João',
    endereco: 'Avenida Central, 456',
    telefone: '(11) 8888-8888',
    photo_url: '/images/igreja2.jpg',
    description: 'Igreja do bairro São João',
    created_at: new Date(),
    updated_at: new Date(),
    status: 'Ativa',
    category: 'Filial',
    name: 'Igreja São João',
    price: 0
  },
  {
    id: '3',
    nome: 'Igreja Santa Maria',
    endereco: 'Rua das Flores, 789',
    telefone: '(11) 7777-7777',
    photo_url: '/images/igreja3.jpg',
    description: 'Igreja do bairro Santa Maria',
    created_at: new Date(),
    updated_at: new Date(),
    status: 'Inativa',
    category: 'Filial',
    name: 'Igreja Santa Maria',
    price: 0
  }
];
