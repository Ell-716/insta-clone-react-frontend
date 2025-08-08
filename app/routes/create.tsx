import { NavLink, Outlet } from "react-router";

export default function CreateLayout() {
  return (
    <div className="pb-24"> {/* room above BottomNav */}
      <Outlet />

      {/* Bottom pill switcher (sits above BottomNav) */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-20 z-40">
        <div className="flex items-center gap-6 rounded-full bg-black/60 text-gray-300 px-6 py-2 backdrop-blur">
          <NavLink
            to="/create/post"
            className={({ isActive }) =>
              `tracking-wider text-sm ${isActive ? "text-white font-semibold" : ""}`
            }
          >
            POST
          </NavLink>
          <NavLink
            to="/create/reel"
            className={({ isActive }) =>
              `tracking-wider text-sm ${isActive ? "text-white font-semibold" : ""}`
            }
          >
            REEL
          </NavLink>
        </div>
      </div>
    </div>
  );
}
