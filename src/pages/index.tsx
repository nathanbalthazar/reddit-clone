import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PageContent from "../components/Layout/PageContent";
import { auth } from "../firebase/clientApp";

const Home: NextPage = () => {
  const [user, loadingUser] = useAuthState(auth);

  const buildUserHomeFeed = () => {};

  const buildNoUserHomeFeed = () => {};

  const getUserPostVotes = () => {};

  useEffect(() => {
    if (!user && !loadingUser) buildNoUserHomeFeed();
    
  }, [user, loadingUser]);

  return (
    <PageContent>
      <></>
      <></>
    </PageContent>
  );
};

export default Home;
