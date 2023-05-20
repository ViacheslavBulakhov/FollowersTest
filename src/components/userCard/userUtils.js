export const followersValidations = (number) => {
  const length = number.toString().length;

  if (length <= 3) {
    return number;
  }

  const lastThreeDigits = number.toString().slice(length - 3);
  const remainingDigits = number.toString().slice(0, length - 3);
  const validateNumber = `${remainingDigits},${lastThreeDigits}`;

  return validateNumber;
};

export const updateUsersList = ({ isFollowing, id, followers }) => {
  const localUsers = JSON.parse(localStorage.getItem("users")) || [];
  const isUser = localUsers.some((localUser) => localUser.id === id);
  return isUser
    ? [
        ...localUsers.map((user) =>
          user.id === id
            ? {
                ...user,
                isFollowing: !user.isFollowing,
                followers: isFollowing
                  ? user.followers - 1
                  : user.followers + 1,
              }
            : { ...user }
        ),
      ]
    : [
        ...localUsers,
        { id, isFollowing: !isFollowing, followers: followers + 1 },
      ];
};

export const toggleFollowStatus = ({
  setLocalFollowers,
  setIsFollowing,
  isFollowing,
}) => {
  if (isFollowing) {
    setLocalFollowers((prevState) => prevState - 1);
  } else {
    setLocalFollowers((prevState) => prevState + 1);
  }
  setIsFollowing((prevState) => !prevState);
};
