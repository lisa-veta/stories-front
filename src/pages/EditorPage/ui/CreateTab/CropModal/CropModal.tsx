import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Button } from '@shared/ui/Button';
import * as SC from './CropModal.styles';

interface CropModalProps {
    image: string;
    onClose: () => void;
    onSave: (croppedImage: string) => void;
}

interface Area {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const CropModal = ({ image, onClose, onSave }: CropModalProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback(
    (_: any, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const createImage = (url: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', reject);
      img.src = url;
    });

  const getCroppedImg = async () => {
    if (!croppedAreaPixels) {return;}

    const img = await createImage(image);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {return;}

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
    );

    return canvas.toDataURL('image/jpeg');
  };

  const handleSave = async () => {
    const cropped = await getCroppedImg();
    if (cropped) {
      onSave(cropped);
      onClose();
    }
  };

  return (
    <SC.Overlay>
      <SC.Modal>
        <SC.CropperWrapper>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={9 / 16}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </SC.CropperWrapper>

        <SC.Controls>
          <SC.RangeInput
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
          />

          <Button onClick={handleSave}>Сохранить</Button>
          <Button variant="secondary" onClick={onClose}>
                        Отмена
          </Button>
        </SC.Controls>
      </SC.Modal>
    </SC.Overlay>
  );
};
