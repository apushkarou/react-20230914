import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatusById } from "../ui/request/selectors";

export function useMakeRequest(thunk) {
  const [requestId, setRequestId] = useState();
  const dispatch = useDispatch();

  const requestStatus = useSelector((state) =>
    selectRequestStatusById(state, requestId)
  );

  const makeRequest = useCallback(
    (...params) => {
      const request = dispatch(thunk(...params));

      setRequestId(request.requestId);
    },
    [dispatch, thunk]
  );

  return [requestStatus, makeRequest];
}
