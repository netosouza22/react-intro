import Post from "@/componentes/Post";

export default function Componentization() {
  return (
    <div>
      <Post author="Neto" title="O que não fazer em React Js" views={10} />
      <Post author="Alberto" title="Como passar sem estudar" views={15} />
      <Post author="Lucas" title="No céu tem pão" views={5} />
    </div>
  );
}
