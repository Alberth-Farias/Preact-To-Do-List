export default function CompletedTasks({ taskCount }) {
  return (
    <div className="stats">
      <div className="stat-title">Tasks completas</div>
      <div className="stat-value text-primary">{taskCount}</div>
    </div>
  );
}
