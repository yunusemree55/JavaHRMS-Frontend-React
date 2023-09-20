import React, { useEffect, useState } from "react";
import { Button, Card, Image, Input, Modal } from "semantic-ui-react";
import PhotoService from "../../services/photoService";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveUserPhoto } from "../../store/actions/authActions";

function ProfilePhoto() {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState(undefined);
  const [mainPhoto, setMainPhoto] = useState("");

  const dispatch = useDispatch();
  const { userId } = useParams();
  
  const { activeUser } = useSelector((state) => state.auth);
  const { defaultPhoto } = useSelector((state) => state.auth);

  const photoService = new PhotoService();

  const getPhoto = (id) => {
    photoService
      .getPhotoByUserId(id)
      .then((result) => setMainPhoto(result.data.url));
  };

  useEffect(() => {
    getPhoto(userId);
  });

  const handleFileChange = (e) => {
    e.target.files &&
      e.target.files[0] &&
      setPhoto(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const handleUpdate = () => {
    const data = {
      url: file,
      userId: parseInt(userId),
    };

    if (mainPhoto) {
      photoService.update(data);
      setTimeout(() => {
        dispatch(updateActiveUserPhoto(photo));
        getPhoto(userId)
      }, 3500);
    } else {
      photoService.add(data);
      setTimeout(() => {
        dispatch(updateActiveUserPhoto(photo));
        getPhoto(userId)
      }, 3500);
    }

    setPhoto(null);
    setFile(null);
    setOpen(false);
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => activeUser.id === userId && setOpen(true)}
        open={open}
        trigger={
          <Card
            centered
            raised
            image={!!mainPhoto ? mainPhoto : defaultPhoto}
          />
        }
      >
        <Modal.Header>Profil Resmi Yükle</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={photo} wrapped />

          <Modal.Description>
            <Input type="file" onChange={handleFileChange} />
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button
            onClick={() => {
              setOpen(false);
              setFile(undefined);
              setPhoto("");
            }}
          >
            İptal
          </Button>
          {!!photo && (
            <Button onClick={handleUpdate} positive>
              Güncelle
            </Button>
          )}
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ProfilePhoto;
