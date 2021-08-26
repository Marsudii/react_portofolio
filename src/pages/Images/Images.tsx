import React from 'react';

import Gallery from 'react-photo-gallery';
import FadeIn from 'react-fade-in';

const photos = [
  {
    src: 'https://1.bp.blogspot.com/-wdPptjJs_5A/YQZxkwti5LI/AAAAAAAAAdY/3FuCx1wyRVIvElsUPLjo_p8C1eA5zO_VgCLcBGAsYHQ/s2048/IMG20190729091315.jpg',
    width: 4,
    height: 3,
  },
  {
    src: 'https://1.bp.blogspot.com/-b7fgmNr8_KE/YQZxrSqgjOI/AAAAAAAAAdg/zCaB5A2jzRMcQ1n3f6sV-vM7rrFQ1-O6QCLcBGAsYHQ/s2048/IMG20190728081505.jpg',
    width: 3,
    height: 2,
  },
  {
    src: 'https://1.bp.blogspot.com/-UQ_PphUbuVI/YQZxxer3H4I/AAAAAAAAAdk/Esw0zJcNTUIMAEnTN-S_thlQ0Ew2Jhs7QCLcBGAsYHQ/s2048/IMG20190616064957.jpg',
    width: 3,
    height: 4,
  },
  
  {
    src: 'https://1.bp.blogspot.com/-I2nF8bkcvGY/YQZyIbHWSQI/AAAAAAAAAd8/K4STFixe9qkca5-lYRRiYvw6WX1Y5BZugCLcBGAsYHQ/s2048/IMG20190818014338.jpg',
    width: 6,
    height: 4,
  },

  {
    src: 'https://1.bp.blogspot.com/-R-oRHEErokA/YQZxbG4BEFI/AAAAAAAAAdU/chxO8M8D6MEiKlEh285M1MwdvmHgCsIUACLcBGAsYHQ/s2048/IMG20190819175100.jpg',
    width: 3,
    height: 4,
  },

  
  {
    src: 'https://1.bp.blogspot.com/-GpraM4hcQ_E/YQZyWn1C_LI/AAAAAAAAAeA/Nid4TmpwZcg_OmXVUqQ-k5JL21_Z6XwXgCLcBGAsYHQ/s2048/IMG20190616070624.jpg',
    width: 4,
    height: 3,
  },
];

const Images: React.FC = () => {
  return (
    <FadeIn delay={500}>
      <Gallery
        photos={photos}
        direction="column"
        columns={window.innerWidth < 700 ? 1 : 3}
      />
    </FadeIn>
  );
};

export default Images;
