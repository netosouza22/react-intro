interface IPost {
  titulo: string;
  autor: string;
  views: number;
  conteudo: string;
}

export default function Post({ autor, conteudo, views, titulo }: IPost) {
  const variavel = ['asda', 'asdasd'];

  return (
    <>
      <div>
        <h1>{titulo}</h1>
        <p>{conteudo}</p>
        <span>visualizacoes: {views}</span>
        <span>autor: {autor}</span>
      </div>
    </>
  );
}
