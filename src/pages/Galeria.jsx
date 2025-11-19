import GalleryGrid from '../components/GalleryGrid.jsx';
import Hero from '../components/Hero.jsx';

const images = Array.from({ length: 12 }).map((_, index) => ({
  src: `https://source.unsplash.com/random/1600x900/?fitness,gym&sig=${index + 10}`,
  alt: 'Momentos Virya'
}));

const Galeria = () => (
  <div className="galeria-page">
    <Hero
      title="Galeria"
      subtitle="Bastidores e espaços"
      description="Treinos, reabilitações e encontros que acontecem diariamente na Virya."
      backgroundImage="https://source.unsplash.com/random/1600x900/?gallery,fitness"
    />
    <GalleryGrid images={images} />
  </div>
);

export default Galeria;
