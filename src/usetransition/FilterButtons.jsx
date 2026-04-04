function FilterButtons({ onFilter }) {
  return (
    <>
      <button onClick={() => onFilter("ALL")}>All</button>
      <button onClick={() => onFilter("COMPLETED")}>Completed</button>
      <button onClick={() => onFilter("PENDING")}>Pending</button>
    </>
  );
}

export default FilterButtons;