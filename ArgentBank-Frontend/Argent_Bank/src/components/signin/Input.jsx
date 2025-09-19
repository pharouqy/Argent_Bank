function input(props) {
  return (
    <div className="input-container">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  );
}
export default input;
