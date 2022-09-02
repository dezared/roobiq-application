import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import TextInput from '../components/controls/TextInput';
import Button from '../components/controls/Button';
import Avatar from '../components/controls/Avatar';
import ImagePicker from '../components/controls/ImagePicker';
import TabsContainer from '../components/TabsContainer';
import TeamSlide from '../components/slides/TeamSlide';

const Box = styled.div`
  padding: 30px 50px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const NameField = styled.div`
  margin-right: 30px;
  width: 100px;
`;

function Components() {
  const [file, setFile] = useState('https://images.unsplash.com/photo-1595608216441-abc4557df27d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80');

  const fileUrl = useMemo(() => {
    if (!file) return null;

    if (typeof file === 'object') {
      return URL.createObjectURL(file);
    }

    return file;
  }, [file]);

  const onDelete = () => {
    setFile(null);
  };

  const onChangeFile = (newFile) => {
    // eslint-disable-next-line no-debugger
    debugger;
    setFile(newFile);
  };

  return (
    <Box>
      <Row>
        <NameField>Text input</NameField>
        <TextInput placeholder="Печатать тут" />
      </Row>

      <Row>
        <NameField>Primary Button</NameField>
        <Button>Перейти к описанию</Button>
      </Row>

      <Row>
        <NameField>Secondary Button</NameField>
        <Button color="secondary">Добавить пункт</Button>
      </Row>

      <Row>
        <NameField>Disabled Button</NameField>
        <Button disabled>Сохранить</Button>
      </Row>

      <Row>
        <NameField>Avatar</NameField>
        <Avatar color="#7A94DF">R</Avatar>
      </Row>

      <Row>
        <NameField>Image picker</NameField>
        <ImagePicker file={fileUrl} onChangeFile={onChangeFile} onDelete={onDelete} />
      </Row>

      <Row>
        <TabsContainer />
      </Row>

      <Row>
        <TeamSlide />
      </Row>
    </Box>
  );
}

export default Components;
