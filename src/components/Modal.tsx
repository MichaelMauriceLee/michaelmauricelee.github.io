import { useStore } from '@nanostores/react';
import { Button, Modal } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import { selectedSideProject } from '../store';
import React from 'react';

export default function Popup() {
  const $selectedSideProject = useStore(selectedSideProject);
  const { t } = useTranslation();

  return (
    <Modal
      show={$selectedSideProject !== null}
      onClose={() => selectedSideProject.set(null)}
      dismissible
    >
      <Modal.Header>{$selectedSideProject?.title}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <img src={$selectedSideProject?.modalInfo.imageUrl} />
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {$selectedSideProject?.modalInfo.description}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {$selectedSideProject?.webAppURL && (
          <Button href={$selectedSideProject.webAppURL}>
            {t('openApplication')}
          </Button>
        )}
        <Button href={$selectedSideProject?.codeUrl}>{t('viewCode')}</Button>
      </Modal.Footer>
    </Modal>
  );
}
