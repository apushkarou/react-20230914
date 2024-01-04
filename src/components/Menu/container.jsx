import React from "react";
import { Menu } from "./component";
import { fetchDishesByRestaurantId } from "../../../redux/features/dishes/thunks/get-dishes";
import { StatusCodes } from "../../constants/matcher";
import { useRequest } from "../../hooks/useRequest";

export default function MenuContainer({ menu, restaurantId }) {
  const menuRequestStatus = useRequest(fetchDishesByRestaurantId, restaurantId);

  if (menuRequestStatus === StatusCodes.Pending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Menu menu={menu} />
    </div>
  );
}
