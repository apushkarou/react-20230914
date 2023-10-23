import { StatusCodes } from "../../constants/matcher";

export const selectRequestModule = (state) => state.request;

export const selectRequestStatusById = (state, requestId) =>
  selectRequestModule(state)[requestId]?.status || StatusCodes.Idle;
