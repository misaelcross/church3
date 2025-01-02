import { Metadata } from 'next';
import SignUpViewPage from '../_components/signup-view';

export const metadata: Metadata = {
  title: 'Autenticação | Cadastro',
  description: 'Página de cadastro para autenticação.'
};

export default function Page() {
  return <SignUpViewPage />;
}