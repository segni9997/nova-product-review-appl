export const ITEM_PER_PAGE = 10

const Pagination = ({ page, count }: { page: number; count: number }) => {
//   const router = useRouter();

  const checkprev = ITEM_PER_PAGE * (page - 1) > 0
  const checknext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;
  const ChangePages = (newPage: number) => {
    const Params = new URLSearchParams(window.location.search);
    Params.set("page", newPage.toString())
    // router.push(`${window.location.pathname}?${Params}`)
  }
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled={!checkprev}
        onClick={()=>ChangePages(page-1)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <button
                className={`px-2 rounded-sm ${
                  page === pageIndex
                    ? "bg-accent text-accent-content bg-opacity-50"
                    : "text-gray-400"
                } `}
                key={pageIndex}
                onClick={()=>ChangePages(pageIndex)}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>
        
      <button
        onClick={()=>ChangePages(page+1)}
        disabled={!checknext} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
