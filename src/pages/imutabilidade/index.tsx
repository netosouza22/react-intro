export default function Imutabilidade() {
  const pages = ["React", "NodeJs", "JavaScript"];

  function handleAddPage() {
    pages.push(`Nova pagina ${Date.now()}`);

    console.log(pages);
  }

  return (
    <div className="">
      <header title="Meu titulo">
        <ul>
          {pages.map((page) => (
            <li key={page}>{page}</li>
          ))}
        </ul>
      </header>

      <button type="button" onClick={handleAddPage}>
        Nova Página
      </button>
    </div>
  );
}
