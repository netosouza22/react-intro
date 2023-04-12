import Post from "@/componentes/Post";

export default function Blog() {
  return (
    <div>
      <Post author="Lucas" title="Papai Noel seria um mito?" views={100} />
      <Post author="João" title="Dicas de beleza" views={200} />
      <Post author="Ana" title="Beber leite com cachaça?" views={50} />
    </div>
  );
}
