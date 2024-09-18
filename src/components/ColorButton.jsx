const ColorButton = ({ changeColor, color }) => {
  return (
    <div className={`colorBtn ${color.selected ? "colorBtn-active" : ""}`}>
      <button
        onClick={() => changeColor(color.id)}
        className="colorBtn_color"
        style={{ backgroundColor: `${color.color}` }}
      ></button>
    </div>
  );
};

export default ColorButton;
