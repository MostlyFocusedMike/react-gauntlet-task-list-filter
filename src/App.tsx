// import { useState, useEffect } from 'react'

export default function App() {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="grid h-screen grid-rows-[auto_1fr] bg-slate-50 font-stretch-semi-condensed">
      <div className="m-auto flex max-w-200 flex-wrap items-center justify-around gap-4 p-10">
        <h1
          className="block w-fit border-0 pr-4 text-center text-8xl font-bold font-stretch-ultra-condensed sm:border-b-8 md:border-0 md:border-r-8"
          aria-label="Task List"
        >
          Task{' '}
          <span className="inline-block border-b-8 sm:border-0">
            <span className="m-2 inline-block -rotate-30 pr-2 text-green-800 sm:pl-3">L</span>ist
          </span>
        </h1>
        <form className="w-fit border p-2 text-center shadow-[5px_5px_0px_0px_rgb(0,0,0,1)]" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-thin">Add New Task</h2>
          <label className="my-4 block text-lg">
            Task Name:
            <input type="text" className="ml-2 bg-stone-200 px-2 py-1" />
          </label>
          <button className="m-auto my-3 block cursor-pointer rounded-xl border px-5 transition duration-150 ease-in-out hover:bg-stone-200 active:translate-0.5 active:shadow-none">
            Create Task
          </button>
        </form>
      </div>

      <section className="bg-stone-900 text-stone-50" aria-labelledby="tasks-header">
        <div className="m-auto w-full max-w-180">
          <div id="tasks-header-container" className="flex items-baseline">
            <hr className="w-full border-4" />
            <h2 id="tasks-header" className="p-2 pr-0 text-center text-6xl">
              Tasks
            </h2>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            <div id="tasks-meta" className="border-r border-white pr-3">
              <div id="filter-buttons" className="flex gap-2">
                <button
                  className="my-3 cursor-pointer rounded-xl border px-5 transition duration-150 hover:bg-stone-700 active:translate-0.5 aria-pressed:bg-white aria-pressed:text-black aria-pressed:hover:bg-stone-300"
                  aria-label="Show All Tasks"
                  aria-pressed="true"
                >
                  All
                </button>
                <button
                  className="my-3 cursor-pointer rounded-xl border px-5 transition duration-150 hover:bg-stone-700 active:translate-0.5 aria-pressed:bg-white aria-pressed:text-black aria-pressed:hover:bg-stone-300"
                  aria-label="Show Active Tasks"
                  aria-pressed="false"
                >
                  Active
                </button>
                <button
                  className="my-3 cursor-pointer rounded-xl border px-5 transition duration-150 hover:bg-stone-700 active:translate-0.5 aria-pressed:bg-white aria-pressed:text-black aria-pressed:hover:bg-stone-300"
                  aria-label="Show Finished Tasks"
                  aria-pressed="false"
                >
                  Finished
                </button>
              </div>

              <p className="text-right text-2xl">Remaining Tasks: 3</p>
            </div>

            <ul className="flex-1">
              <li className="w-full">
                <label className="decoration flex items-center border-white text-3xl decoration-1 accent-green-700 has-checked:text-stone-300 has-checked:line-through">
                  <input type="checkbox" className="peer m-2 h-6 w-6" />
                  Go To Store
                </label>
                {/* <input type="text" className="m-2 w-80 bg-stone-200 px-2 py-1" /> */}
                <hr className="border-0.5" />
                <div className="flex justify-between gap-2 px-2">
                  <button
                    className="my-3 cursor-pointer rounded-xl border px-5 transition duration-150 hover:bg-stone-700 active:translate-0.5"
                    aria-label="Edit Task"
                  >
                    Edit
                  </button>
                  <button
                    className="my-3 cursor-pointer rounded-full border-2 border-red-800 px-2 transition duration-150 hover:bg-stone-700 active:translate-0.5"
                    aria-label="Delete Task"
                  >
                    X
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
