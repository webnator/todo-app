import CookieAdapterInterface from '@sandbox/services/abstractions/cookie.adapter.interface';

const cookieAdapterStub: jest.Mocked<CookieAdapterInterface> = {
  get: jest.fn(),
  remove: jest.fn(),
  set: jest.fn(),
};

export default cookieAdapterStub;
