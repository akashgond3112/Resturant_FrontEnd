import classes from "./AutoSuggestionError.module.css"

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const AutoSuggestionError = () => {
  return (
    <div className={classes["main"]}>
      <div className={classes["auto_suggestion_error_holder"]}>
        <p
          color="#9C9C9C"
          font-weight="500"
          className={classes["auto_suggestion_error_primary"]}
        >
          Oops!
        </p>
        <p
          color="#9C9C9C"
          font-weight="400"
          className={classes["auto_suggestion_error_secondary"]}
        >
          We could not understand what you mean, try rephrasing the query.
        </p>
      </div>
    </div>
  );
}