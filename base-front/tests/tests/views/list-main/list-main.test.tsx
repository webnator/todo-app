import List from '@sandbox/domain/List/List';
import Task from '@sandbox/domain/Task/Task';
import { WebSocketContext } from '@sandbox/infra/react/WebsocketContext';
import ListView from '@sandbox/views/list-main';
import { waitFor } from '@testing-library/dom';
import { act } from '@testing-library/react';
import { ListBuilder } from '../../../test-helpers/entity-builders/list.builder';
import { TaskBuilder } from '../../../test-helpers/entity-builders/task.builder';
import { UserBuilder } from '../../../test-helpers/entity-builders/user.builder';
import { renderView } from '../../../test-helpers/renderer';
import mockRouter from '../../../test-helpers/stubs/infra/react/NextRouterMock';
import listRepositoryStub from '../../../test-helpers/stubs/infra/repositories/list.repository.stub';
import userRepositoryStub from '../../../test-helpers/stubs/infra/repositories/user.repository.stub';
import { useContext } from 'react';
import TriggerWebSocketMessage from '../../../test-helpers/stubs/infra/react/WebsocketMessageTrigger';

describe('Main list view', () => {
  const sharedKey = 'mr-red-sloth-34';
  let mockTasks: Task[];
  let mockList: List;
  beforeEach(() => {
    mockList = new ListBuilder().build();
    mockTasks = [
      new TaskBuilder().build(),
    ];

    userRepositoryStub.getLoggedUser.mockReset().mockReturnValue(new UserBuilder().build());
    listRepositoryStub.getListByKey.mockReset().mockResolvedValue(mockList);
    listRepositoryStub.getTasksForList.mockReset().mockResolvedValue(mockTasks);
    mockRouter.replace.mockReset();
  });

  test('should redirect to /welcome if list is not found', async () => {
    listRepositoryStub.getListByKey.mockReset().mockResolvedValue(null);
    await renderView(<ListView params={{ key: sharedKey }} />);

    await waitFor(() => {
      expect(mockRouter.replace).toHaveBeenCalledWith('/welcome');
      expect(mockRouter.replace).toHaveBeenCalled();
    });
  });

  test('should render list name and tasks', async () => {
    const view = await renderView(<ListView params={{ key: sharedKey }} />);

    await waitFor(() => {
      expect(view.getByDisplayValue(mockList.name as string)).toBeInTheDocument();
      expect(view.getByText(mockTasks[0].title)).toBeInTheDocument();
    });
  });

  test('should render a new task if received in websocket', async () => {
    const newMockedTask = new TaskBuilder()
      .with('id', 35235)
      .with('listKey', sharedKey)
      .with('title', 'New task')
      .build();

    const taskCreateMessage = {
      entityType: 'TASK',
      action: 'CREATE',
      listKey: sharedKey,
      entity: newMockedTask,
    };

    const view = await renderView(<>
        <ListView params={{ key: sharedKey }} />
        <TriggerWebSocketMessage message={taskCreateMessage} />
      </>
    );

    await waitFor(() => {
      expect(view.getByText(newMockedTask.title)).toBeInTheDocument();
    });
  });

  test('should not render a new task if received in websocket for another list', async () => {
    const newMockedTask = new TaskBuilder()
      .with('id', 35235)
      .with('listKey', sharedKey + 'not-me')
      .with('title', 'New task')
      .build();

    const taskCreateMessage = {
      entityType: 'TASK',
      action: 'CREATE',
      listKey: sharedKey + 'not-me',
      entity: newMockedTask,
    };

    const view = await renderView(<>
        <ListView params={{ key: sharedKey }} />
        <TriggerWebSocketMessage message={taskCreateMessage} />
      </>
    );

    await waitFor(() => {
      expect(view.queryByText(newMockedTask.title)).not.toBeInTheDocument();
    });
  });
});
