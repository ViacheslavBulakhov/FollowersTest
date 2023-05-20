import userPhoto from "images/UserPhoto.png";
import logo from "images/Logo.png";
import {
  BackgroundWrap,
  CardBox,
  DelimiterCardElement,
  FollowBtn,
  ImageFrameElement,
  LogoWrap,
  UserInformationItem,
  UserPhotoWrap,
} from "./UserCard.styled";
import { useEffect, useState } from "react";

export default function UserCard({
  user: { tweets, followers, id, avatar },
  setUsers,
}) {
  const [isFollowing, setIsFollowing] = useState(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = localUsers.find((user) => user.id === id);

    const isFollowingResult =
      foundUser && foundUser.isFollowing ? foundUser.isFollowing : false;

    return isFollowingResult;
  });

  const [localFollowers, setLocalFollowers] = useState(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = localUsers.find((user) => user.id === id);
    const isFollowingResult =
      foundUser && foundUser.followers ? foundUser.followers : followers;

    return isFollowingResult;
  });
  console.log(avatar);

  useEffect(() => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, isFollowing: isFollowing } : user
      )
    );
  }, [isFollowing, setUsers, id]);

  const handleFollowing = (id, followers) => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (localUsers.length === 0) {
      localStorage.setItem(
        "users",
        JSON.stringify([{ id, followers: followers + 1, isFollowing: true }])
      );
      stateChanger();
      return;
    }

    const updatedUsersList = updateUsersList(localUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsersList));
    stateChanger();
  };

  const updateUsersList = (localUsers) => {
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

  const stateChanger = () => {
    if (isFollowing) {
      setLocalFollowers((prevState) => prevState - 1);
    } else {
      setLocalFollowers((prevState) => prevState + 1);
    }
    setIsFollowing((prevState) => !prevState);
  };

  const followersValidations = (number) => {
    const length = number.toString().length;

    if (length <= 3) {
      return number;
    }

    const lastThreeDigits = number.toString().slice(length - 3);
    const remainingDigits = number.toString().slice(0, length - 3);
    const validateNumber = `${remainingDigits},${lastThreeDigits}`;

    return validateNumber;
  };

  return (
    <CardBox>
      <LogoWrap>
        <img src={logo} alt="logo" />
      </LogoWrap>
      <BackgroundWrap />
      <UserPhotoWrap>
        <img
          src={avatar}
          alt="logo"
          width={62}
          height={62}
          style={{ borderRadius: "50%" }}
        />
      </UserPhotoWrap>
      <DelimiterCardElement />
      <ImageFrameElement />

      <ul
        style={{
          display: " flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <UserInformationItem>
          <p>
            <span>{tweets}</span> TWEETS
          </p>
        </UserInformationItem>
        <UserInformationItem>
          <p>
            <span>{followersValidations(localFollowers)}</span> FOLLOWERS
          </p>
        </UserInformationItem>

        <FollowBtn
          onClick={() => handleFollowing(id, followers)}
          style={{
            background: `${isFollowing ? "#5CD3A8" : "#EBD8FF"}`,
          }}
        >
          {isFollowing ? "Following" : "Follow"}
        </FollowBtn>
      </ul>
    </CardBox>
  );
}
