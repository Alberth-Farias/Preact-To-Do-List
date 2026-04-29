export default function Tasks({
  tasks,
  completeTask,
  priorityColor,
  dateSimplify,
}) {
  return (
    <div className="card shadow-sm h-[calc(100vh-120px)] p-10">
      <div className="card-body bg-base-200 rounded-lg overflow-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-xl font-light">Nome</th>
                <th className="text-xl font-light">Prioridade</th>
                <th className="text-xl font-light">Prazo</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <th class="w-1/10">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xl checkbox-success"
                      onChange={() => completeTask(task.id)}
                    />
                  </th>
                  <td className="w-3/10">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold text-2xl">{task.titulo}</div>
                        <div className="text-sm opacity-50">
                          {task.descricao}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-3/10">{priorityColor(task.prioridade)}</td>
                  <td className="w-3/10 text-2xl">{dateSimplify(task.data)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
