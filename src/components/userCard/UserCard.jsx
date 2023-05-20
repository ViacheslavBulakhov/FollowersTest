import logo from "images/Logo.png";
import userPhoto from "images/UserPhoto.png";
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
import {
  followersValidations,
  toggleFollowStatus,
  updateUsersList,
} from "./userUtils";

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

      toggleFollowStatus({ setLocalFollowers, setIsFollowing, isFollowing });

      return;
    }

    localStorage.setItem(
      "users",
      JSON.stringify(updateUsersList({ isFollowing, id, followers }))
    );

    toggleFollowStatus({ setLocalFollowers, setIsFollowing, isFollowing });
  };

  return (
    <CardBox>
      <LogoWrap>
        <img src={logo} alt="logo" />
      </LogoWrap>
      <BackgroundWrap />
      <UserPhotoWrap>
        <img
          src={avatar ?? userPhoto}
          alt="logo"
          width={avatar ? 62 : 80}
          height={avatar ? 62 : 80}
          style={{ borderRadius: "50%" }}
          loading="lazy"
        />
      </UserPhotoWrap>
      <DelimiterCardElement />
      {avatar && <ImageFrameElement />}

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
