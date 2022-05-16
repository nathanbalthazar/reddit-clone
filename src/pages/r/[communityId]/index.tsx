import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { Community } from "../../../atoms/CommunitiesAtom";
import { firestore } from "../../../firebase/clientApp";
import safeJsonStringify from "safe-json-stringify";
import CommunityNotFound from "../../../components/Community/NotFound";

type CommunityNameProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityNameProps> = ({ communityData }) => {
  if (!communityData) {
    return <CommunityNotFound />;
  }

  return <div>WELCOME TO {communityData.id}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("getServerSideProps error", error);
  }
}

export default CommunityPage;
