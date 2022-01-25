import { useSelector } from "react-redux";
import { MOVIE_TYPE_OPTIONS } from "../constants/constants";
import { setType } from "../redux/slices/movies.slice";
import { useAppDispatch, RootState } from "../redux/store/store";

export default function Filter() {
  const type = useSelector((state: RootState) => state.movieReducer.type);
  const dispatch = useAppDispatch();

  return (
    <div>
      <select
        name="select"
        value={type}
        onChange={(e) => {
          dispatch(setType(e.target.value));
        }}
      >
        {MOVIE_TYPE_OPTIONS.map(function (t) {
          return (
            <option value={t} selected={type === t}>
              {t}
            </option>
          );
        })}
      </select>
    </div>
  );
}
