const mockRouter = {
  query: { listKey: 'test-list' },
  pathname: '/tasks',
  asPath: '/tasks?listKey=test-list',
  push: jest.fn(),
  replace: jest.fn(),
};

export default mockRouter;
