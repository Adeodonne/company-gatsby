import {RootState} from "@/app/store";

export const selectUser = (state: RootState) => state.user.user;