import { render, screen } from '@testing-library/react';
import Example1 from '../../src/components/example1';


test('Deve renderizar o componente corretamente', () => {
  render(<Example1/>);

  const texto = screen.getByText('Olá, Mundo!');
  expect(texto).toBeInTheDocument();
  expect(texto).toBeVisible();


});
