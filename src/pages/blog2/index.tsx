import Post from "@/componentes/Post";

export default function Blog2() {
  return (
    <div>
      <Post author="Lucas" title="Papai Noel seria real?" views={100} />
      <Post author="Smith" title="Dicas de feiúra" views={200} />
      <Post author="Ana" title="Beber Cachaça com leite?" views={50} />
    </div>
  );
}
