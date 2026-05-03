import type { HistoryProps, HistoryTask } from "../types";

export default function History({ history, onClear, onClose }: HistoryProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="card bg-base-100 w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="card-body p-0">
          <div className="flex items-center justify-between p-6 border-b border-base-content/10">
            <h2 className="card-title text-3xl font-bold">Histórico de Tarefas</h2>
            <div className="flex gap-2">
              {history.length > 0 && (
                <button 
                  onClick={onClear}
                  className="btn btn-ghost btn-sm text-error"
                >
                  Limpar Tudo
                </button>
              )}
              <button onClick={onClose} className="btn btn-circle btn-ghost btn-sm">
                ✕
              </button>
            </div>
          </div>

          <div className="overflow-auto max-h-[60vh] p-6">
            {history.length === 0 ? (
              <div className="text-center py-10 opacity-50">
                <p className="text-xl">Nenhuma tarefa no histórico ainda.</p>
                <p>Complete tarefas para vê-las listadas aqui.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {history.map((task: HistoryTask) => (
                  <div key={task.id} className="flex items-center justify-between p-4 bg-base-200 rounded-xl border border-base-content/5">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-xl">{task.titulo}</h3>
                        <span className="badge badge-success badge-sm opacity-70">Concluída</span>
                      </div>
                      <p className="text-base-content/70">{task.descricao}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs opacity-50 font-mono">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {new Date(task.completedAt).toLocaleString('pt-BR')}
                      </div>
                    </div>
                    <div className="ml-4 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 bg-base-200/50 flex justify-end">
            <button onClick={onClose} className="btn btn-primary px-8">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
