import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import UserCard from "components/userCard/UserCard";
import LoadMoreBtn from "components/loadMoreBtn/LoadMoreBtn";
import DropdownFilter from "components/dropdownFilter/DropDownFilter";
import { UsersList } from "./UsersList.styled";
import { fetchUsers } from "services/api";

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    fetchUsers({ setUsers, page });
  }, [page, isFirstLoad]);

  const getFilteredUsers = (type) => {
    switch (type) {
      case "follow":
        return users.filter((user) => !user.isFollowing);

      case "following":
        return users.filter((user) => user.isFollowing);

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
            {getFilteredUsers(filter).map((user) => (
              <UserCard user={user} key={user.id} setUsers={setUsers} />
            ))}
          </UsersList>
        )}
        <LoadMoreBtn setPage={setPage} />
      </div>
    </>
  );
}
