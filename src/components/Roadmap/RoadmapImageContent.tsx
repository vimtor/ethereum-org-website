import { Center, Heading, Flex, Stack } from "@chakra-ui/react"
import { Image } from "@/components/Image"

export interface IProps {
  children: React.ReactNode
  title: String
}

const RoadmapImageContent: React.FC<IProps> = ({ children, title }) => (
  <Stack mb={1} mt={16}>
    <Heading as="h3">{title}</Heading>
    <Flex flexDir={{ base: "column", lg: "row" }}>
      <Stack mb={4}>{children}</Stack>
      <Center minW="fit-content">
        <Image
          src="/wallet.png"
          alt="Ethereum Wallet"
          width={350}
          height={435}
          objectFit="contain"
        />
      </Center>
    </Flex>
  </Stack>
)

export default RoadmapImageContent
