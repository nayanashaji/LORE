import Box from "../components/box";
import Navbar from "../components/navbar";

const MainPage = () => {
  const stories = [
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqmwkrbarrPe5PP55OgVzqJ-T_IRVto-5nw&s",
      title: "The Legend of Nala and Damayanti",
      desc: "It is a story of love, separation, and reunion, where Nala, a king, loses everything but is reunited with his wife, Damayanti, through perseverance and destiny.",
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Raja_Ravi_Varma_-_Mahabharata_-_Shakuntala.jpg",
      title: "The Story of Shakuntala",
      desc: "It is the love story of King Dushyanta and Shakuntala, a maiden raised in a hermitage.",
    },
    
    {
      img:"https://indigomusic.com/wp-content/uploads/2024/09/The-Symbolism-of-the-Trojan-Horse-in-Art-and-Literature.png",
      title: "The Trojan Horse",
      desc: "Deception and clever strategy in warfare.",
    },
    {
      img:"https://miro.medium.com/max/1100/1*gyYQTHupFoJNGSaXM1jvMA.jpeg",
      title: "Orpheus and Eurydice",
      desc: "Love, loss, and the power of music.",
    },
  ];

  return (
    <div className="w-full h-full">
      <Navbar/>
      <div className="p-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stories.map(({ title, desc, img }, index) => (
          <Box key={index} title={title} desc={desc} img={img} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
