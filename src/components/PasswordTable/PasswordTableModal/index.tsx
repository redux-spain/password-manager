import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
} from '@chakra-ui/react';
import { Password } from '../../../core/types/reducers';
import PasswordTableModalItemComponent from '../PasswordTableModalItem';
import useClipboard from '../../../hooks/useClipboard';

declare type Props = {
  handleClose: () => void;
  password: Password;
}

export default function PasswordTableModalComponent({ handleClose, password }: Props) {
  const { handleClipboard } = useClipboard();

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex">
          <Box my="auto" mr={3}>
            <img
              loading="lazy"
              src={`http://www.google.com/s2/favicons?domain=${password.url || 'http://github.com/'}`}
              alt={password.name}
              width="20px" />
          </Box>
          <Text my="auto" textTransform="capitalize">{password.name}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={3}>
            <Text color="gray.500">
              {password.description ? password.description : 'No description here. '}
            </Text>
          </Box>

          <PasswordTableModalItemComponent
            fieldType="Email"
            handleClipboard={handleClipboard}
            fieldValue={password.email} />

          <PasswordTableModalItemComponent
            fieldType="Username"
            handleClipboard={handleClipboard}
            fieldValue={password.username} />

          <PasswordTableModalItemComponent
            fieldType="Password"
            handleClipboard={handleClipboard}
            fieldValue={password.password} />

          <PasswordTableModalItemComponent
            fieldType="URL"
            handleClipboard={handleClipboard}
            fieldValue={password.url} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
