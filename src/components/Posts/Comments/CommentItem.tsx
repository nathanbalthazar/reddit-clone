import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import React from "react";
import moment from "moment";

export type Comment = {
  id: string;
  creatorId: string;
  creatorDisplayText: string;
  communityId: string;
  postId: string;
  postTitle: string;
  text: string;
  createdAt: Timestamp;
};

type CommentItemProps = {
  comment: Comment;
  onDelete: (comment: Comment) => void;
  loadingDelete: boolean;
  userId: string;
};

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  onDelete,
  loadingDelete,
  userId,
}) => {
  return (
    <Flex>
      <Box>
        <Icon as={FaReddit} />
      </Box>
      <Stack spacing={1}>
        <Stack direction="row" align="center" fontSize="8pt">
          <Text>{comment.creatorDisplayText}</Text>
          <Text>
            {moment(new Date(comment.createdAt.seconds * 1000)).fromNow()}
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};
export default CommentItem;
