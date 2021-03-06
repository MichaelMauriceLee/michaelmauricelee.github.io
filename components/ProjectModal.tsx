import {
  Button, CardMedia, Typography,
  Dialog, DialogActions, DialogContent, DialogTitle, IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import React from 'react';

const StyledDialogTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface IProps {
  title: string;
  codeUrl: string;
  modalInfo: {
    imageUrl: string;
    description: Array<string>;
  }
  webAppInfo: {
    isWebApp: boolean;
    webAppURL?: string;
  }
  displayModal: boolean;
  handleModalClose(): void;
}

const ProjectModal: React.FC<IProps> = ({
  title, codeUrl, modalInfo, webAppInfo, displayModal, handleModalClose,
}) => (
  <Dialog
    open={displayModal}
    onClose={handleModalClose}
  >
    <DialogTitle>
      <StyledDialogTitle>
        {title}
        <IconButton aria-label="close" onClick={handleModalClose}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
    </DialogTitle>
    <DialogContent dividers>
      <CardMedia component="img" image={modalInfo.imageUrl} />
      {modalInfo.description.map((paragraph, index, arr) => (
        index !== arr.length - 1
          ? (
            <Typography variant="body2" component="div" color="textSecondary" paragraph>
              {paragraph}
            </Typography>
          )
          : (
            <Typography variant="body2" component="div" color="textSecondary">
              {paragraph}
            </Typography>
          )
      ))}
    </DialogContent>
    <DialogActions>
      {webAppInfo.isWebApp && (
      <Button size="small" color="primary" href={webAppInfo.webAppURL}>
        Open Application
      </Button>
      )}
      <Button size="small" color="primary" href={codeUrl}>
        View Code
      </Button>
    </DialogActions>
  </Dialog>
);

export default ProjectModal;
