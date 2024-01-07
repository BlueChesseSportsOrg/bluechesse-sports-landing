const FilterToolbar = () => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    location.search = `?sort_by=${value}`;
  };

  return (
    <div className="filter-toolbar border-t border-b border-gray--600">
      <div className="filter-toolbar__inner container flex h-full items-center">
        <div
          className="filter-toolbar__sort text-left"
          style={{ flex: "1 1 33%", lineHeight: "3.5rem" }}
        >
          <label
            htmlFor="sort-by"
            className="block lg:inline-block mt-2 mr-4 text-xs text-gray-600"
          >
            sort
          </label>
          <select
            className="bg-transparent cursor-pointer pr-4 py-2 text-base text-gray-700"
            id="sort-by"
            value={"manual"}
            onChange={handleChange}
            >
            <option value="manual">manual</option>
            <option value="best-selling">best selling</option>
            <option value="title-ascending">title ascending</option>
            <option value="title-descending">title descending</option>
            <option value="price-ascending">price-ascending</option>
            <option value="price-descending">price-descending</option>
            <option value="created-ascending">created-ascending</option>
            <option value="created-descending">created-descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterToolbar;