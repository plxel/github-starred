import axios from "axios";
import { subtractDaysFromNow, formatDateForGithub } from "../utils";
import * as t from "./actionTypes";

export function load({
  created = formatDateForGithub(subtractDaysFromNow(30)),
  page = 1
} = {}) {
  return {
    type: t.LOAD,
    promise: axios.get(
      `https://api.github.com/search/repositories?q=created:>${created}&sort=stars&page={page}`
    )
  };
}
