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
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm transition duration-180 z-[100] p-4">
      <div className="bg-base-100 h-auto md:h-120 w-full max-w-3xl relative p-6 md:p-8 rounded-3xl overflow-auto max-h-[90vh]">
        <div className="w-full flex justify-between items-start">
          <h3 className="font-bold text-2xl md:text-3xl mb-4 md:mb-7">Criar Task</h3>
          <button
            className="btn btn-sm btn-circle btn-ghost text-lg"
            onClick={() => toHide(false)}
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <div className="flex flex-col">
            <legend className="fieldset-legend text-base md:text-lg">Titulo</legend>
            <input
              value={textTitulo}
              onInput={(e) => setTextTitulo(e.currentTarget.value)}
              type="text"
              minLength={1}
              maxLength={40}
              className="input input-bordered input-md md:input-xl"
            ></input>
            <p className="label mb-4 md:mb-7 mt-1 ml-1 text-xs">{textTitulo.length + "/40"}</p>
          </div>
          <div className="flex flex-col">
            <legend className="fieldset-legend text-base md:text-lg">Descrição</legend>
            <input
              value={textDescricao}
              onInput={(e) => setTextDescricao(e.currentTarget.value)}
              type="text"
              minLength={1}
              maxLength={40}
              className="input input-bordered input-md md:input-xl"
            ></input>
            <p className="label mb-4 md:mb-7 mt-1 ml-1 text-xs">
              {textDescricao.length + "/40"}
            </p>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-base md:text-lg">Prioridade</legend>
              <select
                value={prioridade}
                onChange={(e) => setPrioridade(e.currentTarget.value)}
                className="select select-bordered select-md md:select-xl mb-4 md:mb-7"
              >
                <option value={"Baixa"}>Baixa</option>
                <option value={"Média"}>Média</option>
                <option value={"Alta"}>Alta</option>
              </select>
            </fieldset>
          </div>
          <div>
            <legend className="fieldset-legend text-base md:text-lg mt-1">Prazo</legend>
            <input
              value={data}
              onChange={(e) => setData(e.currentTarget.value)}
              type="date"
              className="input input-bordered input-md md:input-xl"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0">
          <button
            onClick={handleAddTask}
            className="text-xl md:text-2xl md:absolute p-4 md:p-7 md:bottom-10 md:left-70 md:right-70 btn btn-success w-full md:w-auto"
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
