import { render } from '@testing-library/react';
import UserInfo from '../UserInfo';

describe('User Info component', () => {
    it('renders User component without crashing', () => {
        const { getByTestId } = render(<UserInfo />);
        expect(getByTestId('user-info')).toBeInTheDocument();
    });
});