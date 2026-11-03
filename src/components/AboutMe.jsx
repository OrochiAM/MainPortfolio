import ID from './ID';
import File from './File';
import Sprite from './Sprite';

import FolderIcon from '../assets/images/folder.png';

export default function AboutMe() {
  return (
    <>
      <section className="about-me-section">
        <div className="folder-icon">
          <div className="icon">
            <Sprite src={FolderIcon} pixelSize={10} alt="" />
          </div>
          <h2 className="text">About Me</h2>
        </div>

        <File className="folder" fileName={'About Me'}>
          <ID />
        </File>
      </section>
    </>
  );
}
