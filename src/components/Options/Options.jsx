import css from "./Options.module.css";
export const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionscontainer}>
      <button
        className={css.optionbutton}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionbutton}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionbutton}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.resetbutton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
