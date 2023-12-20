import { handleForm } from "./actions";
import { Input, InputField, VStack, Heading, Text } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <>
      <form action={handleForm}>
        <VStack space="xl">
          <Heading color="$text900" lineHeight="$md">
            Login
          </Heading>
          <VStack space="xs">
            <Text color="$text500" lineHeight="$xs">
              Name
            </Text>
            <Input>
              <InputField type="text" name="name" />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text color="$text500" lineHeight="$xs">
              Username
            </Text>
            <Input>
              <InputField type={"text"} name="username" />
            </Input>
          </VStack>
          <button type="submit">Add</button>
        </VStack>
      </form>
    </>
  );
}
