import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex>
        <Button onClick={() => navigate("/")}> 홈</Button>
        <Button onClick={() => navigate("/write")}> 글쓰기</Button>
      </Flex>
    </Box>
  );
}
