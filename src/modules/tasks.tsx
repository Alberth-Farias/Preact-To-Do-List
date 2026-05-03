export default function Tasks({
  tasks,
  completeTask,
  priorityColor,
  dateSimplify,
}) {
  return (
    <div className="card shadow-sm h-[calc(100vh-120px)] p-4 md:p-10">
      <div className="card-body bg-base-200 rounded-lg overflow-auto p-2 md:p-8">
        <div className="overflow-x-auto">
          <table className="table w-full min-w-[500px] md:min-w-full">
            <thead>
              <tr className="grid-cols-4">
                <th className="w-16 md:w-auto" />
                {["Nome", "Prioridade", "Prazo"].map((item: string) => (
                  <th className="text-lg md:text-xl font-light text-center">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task: any) => (
                <tr key={task.id}>
                  <th className="text-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-md md:checkbox-xl checkbox-success"
                      onChange={() => completeTask(task.id)}
                    />
                  </th>
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div>
                        <div className="font-bold text-lg md:text-2xl">{task.titulo}</div>
                        <div className="text-xs md:text-sm opacity-50">
                          {task.descricao}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="scale-75 md:scale-100">
                      {priorityColor(task.prioridade)}
                    </div>
                  </td>
                  <td className="text-center text-lg md:text-2xl">
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
