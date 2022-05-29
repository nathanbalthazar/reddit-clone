import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import { communityState } from "../../../atoms/CommunitiesAtom";
import PageContent from "../../../components/Layout/PageContent";
import NewPostForm from "../../../components/Posts/NewPostForm";
import { auth } from "../../../firebase/clientApp";
import useCommunityData from "../../../hooks/useCommunityData";

const SubmitPostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  // const communityStateValue = useRecoilValue(communityState)
  const {communityStateValue} = useCommunityData()

  console.log('community', communityStateValue);
  return (
    <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text>Create a post</Text>
        </Box>
        {user && <NewPostForm user={user} />}
      </>
      <>{/* <About /> */}</>
    </PageContent>
  );
};
export default SubmitPostPage;
