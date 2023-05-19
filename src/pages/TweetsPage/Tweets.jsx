import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import UserCard from 'components/userCard/UserCard';
import LoadMoreBtn from 'components/loadMoreBtn/LoadMoreBtn';
import DropdownFilter from 'components/dropdownFilter/DropDownFilter';
import { UsersList } from './UsersList.styled';

const notify = () => toast.success(`That's all users`);
axios.defaults.baseURL = 'https://64511247e1f6f1bb22a72c81.mockapi.io/api/v1';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    async function fetchUsers() {
      try {
        const { data } = await axios.get(`/users?p=${page}&l=3`);
        if (data.length === 0) {
          notify();
          return;
        }

        setUsers(prevState => [...prevState, ...data]);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchUsers();
  }, [page, isFirstLoad]);

  const getFilteredUsers = type => {
    switch (type) {
      case 'follow':
        return users.filter(user => !user.isFollowing);

      case 'following':
        return users.filter(user => user.isFollowing);

      default:
        return users;
    }
  };

  return (
    <>
      <DropdownFilter setFilter={setFilter} />
      <div>
        <Toaster />

        {users.length > 0 && (
          <UsersList>
            {getFilteredUsers(filter).map(user => (
              <UserCard user={user} key={user.id} setUsers={setUsers} />
            ))}
          </UsersList>
        )}
        <LoadMoreBtn setPage={setPage} />
      </div>
    </>
  );
}
