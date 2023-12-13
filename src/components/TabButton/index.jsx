function TabButton(props) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : ""}
        onClick={props.onSelect}
      >
        {props.label}
      </button>
    </li>
  );
}

export default TabButton;
