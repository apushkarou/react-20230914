import React, { useEffect, useRef } from "react";
import { Menu } from "./component";
import { fetchDishesByRestaurantId } from "../../../redux/features/dishes/thunks/get-dishes";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatusById } from "../../ui/request/selectors";
import { StatusCodes } from "../../constants/matcher";

export default function MenuContainer({ menu, restaurantId }) {
  const request = useRef();

  const menuRequestStatus = useSelector((state) =>
    selectRequestStatusById(state, request.current?.requestId)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    request.current = dispatch(fetchDishesByRestaurantId(restaurantId));

    return () => {
      request.current?.abort();
      request.current = null;
    };
  }, [restaurantId]);

  if (menuRequestStatus === StatusCodes.Pending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Menu menu={menu} />
    </div>
  );
}
