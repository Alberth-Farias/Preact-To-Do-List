import type { HeaderProps } from "../types";

export default function Header({
  setHistoryIsOpen,
  taskCount,
  themeCheck,
  setThemeCheck,
}: HeaderProps) {
  return (
    <div className="navbar bg-base-300 shadow-lg flex flex-col md:flex-row px-4 h-auto md:h-30 relative justify-center py-4 md:py-0 gap-4">
      <div className="flex items-center gap-4 text-2xl md:text-3xl md:absolute md:left-8">
        <img src="./logo.webp" className="size-12 md:size-18" />
        <p className="font-extrabold text-3xl md:text-4xl pointer-events-none">
          TO-DO-LIST
        </p>
      </div>

      <div className="flex flex-row items-center justify-around">
        <button
          onClick={() => setHistoryIsOpen(true)}
          className="btn btn-md md:btn-lg btn-outline btn-primary m-2"
        >
          Histórico
        </button>
        <div className="divider divider-horizontal"></div>
        <div className="stats bg-transparent shadow-none">
          <div className="stat p-2 md:p-4">
            <div className="stat-title text-xs md:text-base">Tasks completas</div>
            <div className="stat-value text-primary text-2xl md:text-4xl">{taskCount}</div>
          </div>
        </div>
      </div>

      <label className="flex items-center justify-center cursor-pointer gap-2 md:absolute md:right-8 scale-90 md:scale-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="md:w-7 md:h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          value="dark"
          checked={themeCheck}
          onChange={() => setThemeCheck(!themeCheck)}
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="md:w-7 md:h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
}
