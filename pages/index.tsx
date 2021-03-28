import Head from 'next/head'

import { Stack, Button } from "@chakra-ui/react"

export default function Home() {
  return (
    <Stack spacing={12} direction="column" align="center">
    <Button colorScheme="teal" size="xs">
      Button
    </Button>
    <Button colorScheme="teal" size="sm">
      Button
    </Button>
    <Button colorScheme="teal" size="md">
      Button
    </Button>
    <Button colorScheme="teal" size="lg">
      Button
    </Button>
  </Stack>
  )
}
