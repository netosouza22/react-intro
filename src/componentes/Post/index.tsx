interface IPost {
  views: number;
  title: string;
  author: string;
}

export default function Post({ title, author, views }: IPost) {
  return (
    <div>
      <h1>{title}</h1>
      <span>autor: {author}</span> <span>visualizações: {views}</span>
    </div>
  );
}
