import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';
import mockRouter from './tests/test-helpers/stubs/infra/react/NextRouterMock';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
(useRouter as jest.Mock).mockReturnValue(mockRouter);
