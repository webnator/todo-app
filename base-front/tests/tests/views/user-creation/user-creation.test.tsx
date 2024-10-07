import HomeView from '@sandbox/views/user-creation';
import { fireEvent, waitFor } from '@testing-library/dom';
import { UserBuilder } from '../../../test-helpers/entity-builders/user.builder';
import { renderView } from '../../../test-helpers/renderer';
import mockRouter from '../../../test-helpers/stubs/infra/react/NextRouterMock';
import userRepositoryStub from '../../../test-helpers/stubs/infra/repositories/user.repository.stub';

describe('Home view', () => {
  beforeEach(() => {
    userRepositoryStub.getLoggedUser.mockReset().mockReturnValue(null);
    userRepositoryStub.createUser.mockReset().mockResolvedValue(new UserBuilder().build());
    mockRouter.replace.mockReset();
  });

  test('should load the user from the cache', async () => {
    await renderView(<HomeView />);
    expect(userRepositoryStub.getLoggedUser).toHaveBeenCalledTimes(1);
  });

  test('if user is present, it should navigate to list-landing', async () => {
    userRepositoryStub.getLoggedUser.mockReset().mockReturnValue(new UserBuilder().build());
    await renderView(<HomeView />);
    waitFor(() => {
      expect(mockRouter.replace).toHaveBeenCalledTimes(1);
      expect(mockRouter.replace).toHaveBeenCalledWith('/welcome');
    });
  });

  test('should render input when no user is present', async () => {
    const view = await renderView(<HomeView />);
    const input = view.queryByTestId('user-fullName');
    waitFor(() => {
      expect(input).toBeInTheDocument();
    });
  });

  test('should create a user when name is added and redirect to welcome screen', async () => {
    const newUserName = 'William Wallace';
    const view = await renderView(<HomeView />);
    
    await waitFor(() => {
      expect(view.queryByTestId('user-fullName')).toBeInTheDocument();
    });
    const input = view.queryByTestId('user-fullName');
    
    fireEvent.change(input!, { target: { value: newUserName } });

    fireEvent.keyDown(input!, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(userRepositoryStub.createUser).toHaveBeenCalledWith(newUserName);
      expect(userRepositoryStub.createUser).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(mockRouter.replace).toHaveBeenCalledWith('/welcome');
    });
  });
});
