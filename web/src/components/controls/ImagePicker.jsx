import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import CloseIcon from './CloseIcon';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const AddImgWrap = styled(Button)`
  &.MuiButtonBase-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    color: #FFFFFF;
    width: 150px;
    height: 65px;

    background: #F8F8F8;
    border-radius: 8px;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

const AddImgText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #8B8F94;
  margin-top: 8px;
  text-transform: none;
`;

const ImgWrap = styled.span`
  width: 76px;
  height: 65px;
  border-radius: 8px;
  background: #F8F8F8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

const Close = styled(CloseIcon)`
  position: absolute;
  right: -8px;
  top: -8px;
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
function ImagePicker({ file, onChangeFile, onDelete }) {
  const onAddNewFile = (e) => {
    onChangeFile?.(e.target.files[0]);
    e.target.value = null;
  };

  return (
    <Wrap>
      <AddImgWrap component="label">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z" stroke="#8B8F94" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.875 12H15.125" stroke="#8B8F94" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8.875V15.125" stroke="#8B8F94" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <AddImgText>Добавить изображение</AddImgText>
        <input
          type="file"
          accept="image/png, image/jpeg"
          hidden
          onChange={onAddNewFile}
        />
      </AddImgWrap>
      {file ? (
        <ImgWrap>
          <Img src={file} alt="kek" />
          <Close onClick={onDelete} />
        </ImgWrap>
      ) : null}
    </Wrap>
  );
}

export default ImagePicker;
