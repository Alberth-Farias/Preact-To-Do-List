import { useEffect, useState } from "preact/hooks";

export default function CreateTask({ onAddTask, toHide }) {
  const [textTitulo, setTextTitulo] = useState("");
  const [textDescricao, setTextDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("Baixa");
  const [data, setData] = useState("");

  function handleAddTask() {
    const arrayDate = data.split("-");
    const newDateBr = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;

    if (textTitulo && textDescricao && prioridade && data) {
      onAddTask({
        id: crypto.randomUUID(),
        titulo: textTitulo,
        descricao: textDescricao,
        prioridade: prioridade,
        data: newDateBr,
      });
      toHide(false);
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toHide(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="fixed flex h-full w-full justify-center items-center backdrop-blur-sm transition duration-180 z-1">
      <div className="bg-base-100 h-120 w-3xl max-w-dvh relative p-8 rounded-3xl">
        <div className="w-full flex justify-between items-start">
          <h3 className="font-bold text-3xl mb-7">Criar Task</h3>
          <button
            class="btn btn-sm btn-circle btn-ghost text-lg p-2!"
            onClick={() => toHide(false)}
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <legend className="fieldset-legend text-lg">Titulo</legend>
            <input
              value={textTitulo}
              onInput={(e) => setTextTitulo(e.currentTarget.value)}
              type="text"
              minLength={1}
              maxLength={20}
              className="input input-xl pika-single"
            ></input>
            <p className="label mb-7 mt-1 ml-1">{textTitulo.length + "/20"}</p>
          </div>
          <div className="flex flex-col">
            <legend className="fieldset-legend text-lg">Descrição</legend>
            <input
              value={textDescricao}
              onInput={(e) => setTextDescricao(e.currentTarget.value)}
              type="text"
              minLength={1}
              maxLength={20}
              className="input input-xl pika-single"
            ></input>
            <p className="label mb-7 mt-1 ml-1">
              {textDescricao.length + "/20"}
            </p>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg">Prioridade</legend>
              <select
                value={prioridade}
                onChange={(e) => setPrioridade(e.currentTarget.value)}
                className="select select-xl mb-7"
              >
                <option value={"Baixa"}>Baixa</option>
                <option value={"Média"}>Média</option>
                <option value={"Alta"}>Alta</option>
              </select>
            </fieldset>
          </div>
          <div>
            <legend className="fieldset-legend text-lg mt-1">Prazo</legend>
            <input
              value={data}
              onChange={(e) => setData(e.currentTarget.value)}
              type="date"
              className="input input-xl"
            />
          </div>
        </div>
        <button
          onClick={handleAddTask}
          className="text-2xl absolute p-7 bottom-10 left-70 right-70 btn btn-success"
        >
          Criar
        </button>
      </div>
    </div>
  );
}
