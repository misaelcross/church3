export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  created_at: Date;
  updated_at: Date;
  status: string;
  photo_url: string;
}

export type Membro = Employee;

export interface Igreja {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  photo_url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  status: string;
  category: string;
  name: string;
  price: number;
}
