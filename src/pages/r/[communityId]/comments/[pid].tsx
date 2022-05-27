import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Post } from "../../../../atoms/postsAtom";
import PageContent from "../../../../components/Layout/PageContent";
import PostItem from "../../../../components/Posts/PostItem";
import { auth, firestore } from "../../../../firebase/clientApp";
import usePosts from "../../../../hooks/usePosts";

const PostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const { onDeletePost, onVote, postStateValue, setPostStateValue } =
    usePosts();
  const router = useRouter();

  const fetchPost = async (postId: string) => {
    try {
      const postDocRef = doc(firestore, `posts/${postId}`);
      const postDoc = await getDoc(postDocRef);
      setPostStateValue((prev) => ({
        ...prev,
        post: { id: postDoc.id, ...postDoc.data() } as Post,
      }));
    } catch (error) {
      console.log("fetchPost error", error);
    }
  };

  useEffect(() => {
    const { pid } = router.query;

    if (pid) {
      fetchPost(pid as string);
    }
  }, [router.query, postStateValue.selectedPost]);

  return (
    <PageContent>
      <>
        {postStateValue.selectedPost && (
          <PostItem
            post={postStateValue.selectedPost}
            onVote={onVote}
            onDeletePost={onDeletePost}
            userVoteValue={
              postStateValue.postVotes.find(
                (item) => item.id === postStateValue.selectedPost?.id
              )?.voteValue
            }
            userIsCreator={user?.uid === postStateValue.selectedPost?.creatorId}
          />
        )}
        {/* Comments */}
      </>
      <>{/* About */}</>
    </PageContent>
  );
};
export default PostPage;