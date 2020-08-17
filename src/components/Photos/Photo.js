// The component renders a single photo.  It also displays a modal dialog
// that shows a larger image if the user clicks on the photo.
import React, { useState } from 'react';
import { Modal } from 'carbon-components-react';
import parseHtml from 'html-react-parser';

const Photo = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        open={isOpen}
        size="lg"
        passiveModal={true}
        onRequestClose={() => setIsOpen(false)}>
        <div>
          <img
            src={props.photoInfo.url}
            alt={props.photoInfo.title}
            style={{ maxHeight: 500, overflow: 'hidden' }}
          />
          <div>
            <strong>Photo taken on:</strong> {props.photoInfo.datetaken}
          </div>
          <br />
          <div style={{ maxHeight: 100, width: '100%', overflow: 'auto' }}>
            {parseHtml(props.photoInfo.description._content)}
          </div>
        </div>
      </Modal>
      <div
        onClick={() => setIsOpen(true)}
        className="photo_container"
        style={getStyle(props.photoInfo)}
        title={props.photoInfo.title}></div>
    </>
  );
};

const getStyle = photo => {
  let style = {
    backgroundImage: `url(${getUrl(photo.url)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return style;
};

// Get the default url from the large url.  Usually, the large url will end in name_b.jpg.  We
// want to remove the _b from the url to get the default url.
const getUrl = url => {
  let lastDotIndex = url.lastIndexOf('.');
  let nameWithoutSuffix = url.substring(0, lastDotIndex);
  let size = nameWithoutSuffix.length;
  let suffix = url.substring(lastDotIndex, url.length);

  if (size > 2 && nameWithoutSuffix.charAt(size - 2) === '_') {
    nameWithoutSuffix = nameWithoutSuffix.substring(0, size - 2);
  }

  return nameWithoutSuffix + suffix;
};

export default Photo;
