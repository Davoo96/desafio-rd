export const getButtonContent = (
  filter,
  removeFirstFilter,
  removeRemainingFilters
) => {
  if (filter.length === 0) {
    return <span>Selecione uma ou mais opções</span>;
  }

  if (filter.length === 1) {
    return (
      <div className="flex items-center gap-2 border border-[#E4E4E7] rounded-full py-1 px-2 w-48">
        <span className="truncate">{filter[0]}</span>
        <span
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            removeFirstFilter();
          }}
          className="text-red-600 hover:text-red-800"
          title="Remover filtro"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_9_2075)">
              <path
                d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00004 1.33334C4.31814 1.33334 1.33337 4.31811 1.33337 8.00001C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6L6 10"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L10 10"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_2075">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 border border-[#E4E4E7] rounded-full py-1 px-2 w-40">
        <span className="truncate">{filter[0]}</span>
        <span
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            removeFirstFilter();
          }}
          className="text-red-600 hover:text-red-800"
          title="Remover este filtro"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_9_2075)">
              <path
                d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00004 1.33334C4.31814 1.33334 1.33337 4.31811 1.33337 8.00001C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6L6 10"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L10 10"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_2075">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
      <div className="flex items-center gap-2 border border-[#E4E4E7] rounded-full py-1 px-2 w-[60px]">
        <span className="truncate">+{filter.length - 1}</span>
        <span
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            removeRemainingFilters();
          }}
          className="text-red-600 hover:text-red-800"
          title="Remover filtros extras"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_9_2075)">
              <path
                d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00004 1.33334C4.31814 1.33334 1.33337 4.31811 1.33337 8.00001C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6L6 10"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L10 10"
                stroke="#6F6F6F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_2075">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};
