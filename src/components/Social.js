import React from 'react'
import {Icon,HStack} from '@chakra-ui/react'
import {FaFacebookF,FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa'
const Social = () => {
  return (
    <HStack spacing={24}>
      <Icon as={FaFacebookF} boxSize={50}/>
      <Icon as={FaYoutube} boxSize={50}/>
      <Icon as={FaInstagram} boxSize={50}/>
      <Icon as={FaTwitter} boxSize={50}/>
  </HStack>
  )
}

export default Social
