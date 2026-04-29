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
              <tr className="grid-cols-4">
                <th />
                {["Nome", "Prioridade", "Prazo"].map((item: string) => (
                  <th className="text-xl font-light text-center w-3/10">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task: any) => (
                <tr key={task.id}>
                  <th class="w-1/10 text-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xl checkbox-success"
                      onChange={() => completeTask(task.id)}
                    />
                  </th>
                  <td className="w-3/10 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div>
                        <div className="font-bold text-2xl">{task.titulo}</div>
                        <div className="text-sm opacity-50">
                          {task.descricao}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-3/10 text-center">
                    {priorityColor(task.prioridade)}
                  </td>
                  <td className="w-3/10 text-center text-2xl">
                    {dateSimplify(task.data)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
